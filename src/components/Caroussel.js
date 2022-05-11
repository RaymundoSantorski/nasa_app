import {
    useEffect,
    useState,
} from 'react';

import axios from '../helpers/axiosConfig';
import { Image } from './Image';


export const Caroussel = ({ source }) => {

    const [imgData, setImgData] = useState();
    const [currentImage, setCurrentImage] =useState(0);

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

    return (
        <div className='container'>
            {
                imgData && imgData.map((img, i) => {
                    return (
                        <Image img={img} key={i} current={currentImage} />
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