import * as React from 'react';
import { useState } from 'react';
import './imageCarousel.css';
export default function Carousel(props){
    const [images, setImages]= useState([]);

    React.useEffect(()=>{
        setImages(props.imagesList)
    },[])
    return(
    <div id="carousel">
        {
            images.map((each,index)=>{
                return <img src={each} alt="carousel jobs images" className={"carousel-img carousel-img"+index} id={"image"+index} />
            })
        }
    </div>)
}