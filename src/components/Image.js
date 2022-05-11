import {
    useState,
} from 'react';

export const Image = ({ img }) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="apodCard">
            <img 
                src={ img.url } 
                className='apodImage'
                alt={img.title}
            />
            <p className='apodTitle'>"{ img.title }"</p>
            {
                img.copyright && 
                <p className='apodCopy'>{ img.copyright }</p>
            }
            {
                showInfo ? 
                <>
                    <p 
                        className='apodExplanation'
                    >{img.explanation}</p>
                    <p 
                        className='showMoreButton'
                        onClick={() => { setShowInfo(!showInfo) }}
                    >Ocultar</p>
                </>
                : <p
                    className='showMoreButton'
                    onClick={() => { setShowInfo(!showInfo) }}  
                >Leer más...</p>
            }
        </div>  
    )
}