import {
    useState,
} from 'react';

export const Image = ({ img, current, actual, next, last }) => {

    const [showInfo, setShowInfo] = useState(false);
    const isActive = current===actual;

    return (
        <div className={`apodCard${ !isActive && ' hide'}`}>
            <div>
                <img 
                    src={ img.url } 
                    className='apodImage'
                    alt={img.title}
                />
                <p>{current}</p>
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
            <div className='buttons'>
                <p 
                    className='button'
                    onClick={last}
                >Anterior</p>
                <p 
                    className='button'
                    onClick={next}
                >Siguiente</p>
            </div>
        </div>  
    )
}