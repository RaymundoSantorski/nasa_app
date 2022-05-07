import { type } from '@testing-library/user-event/dist/type';
import {
    useEffect,
    useState,
} from 'react';

import axios from '../../helpers/axiosConfig';


export const Image = ({ source }) => {

    const [imgData, setImgData] = useState();
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        if(source === 'apod'){
            axios.get('/planetary/apod', {
                params: {
                    count: 5
                }
            })
            .then(response => {
                console.log(response.data);
                setImgData(response.data);
            });
        }
    }, [source]);

    const goToHDImage = () => {
        window.open(imgData.hdurl);
    }

    return (
        <div className='container'>
            {
                imgData && imgData.map((img, i) => {
                    return (
                        <div key={i} className="apodCard">
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
                })
            }
    </div>  
    )


    // return (
    //     <div className='container'>
    //         {
    //             imgData ?
    //                 <div className="apodCard">
    //                     <div className='imageContainer'>
    //                         <img 
    //                             src={ imgData.url } 
    //                             className='apodImage'
    //                             alt={imgData.title}
    //                         />
    //                         <div 
    //                             className='imageMessage'
    //                             onClick={goToHDImage}
    //                         >
    //                             <p>Click para ver en HD</p>
    //                         </div>
    //                     </div>
    //                     <p className='apodTitle'>"{ imgData.title }"</p>
    //                     {
    //                         imgData.copyright && 
    //                         <p className='apodCopy'>{ imgData.copyright }</p>
    //                     }
    //                     {
    //                         showInfo ? 
    //                         <>
    //                             <p 
    //                                 className='apodExplanation'
    //                             >{imgData.explanation}</p>
    //                             <p 
    //                                 className='showMoreButton'
    //                                 onClick={() => { setShowInfo(!showInfo) }}
    //                             >Ocultar</p>
    //                         </>
    //                         : <p
    //                             className='showMoreButton'
    //                             onClick={() => { setShowInfo(!showInfo) }}  
    //                         >Leer más...</p>
    //                     }
    //                 </div>
    //             : 
    //             <div>
    //                 <p>Loader</p>
    //             </div>
    //         }
    //     </div>
    // )
}