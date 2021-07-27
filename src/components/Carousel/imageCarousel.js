import * as React from 'react';
import { useState } from 'react';
import AlumniUrls from '../../utils/urls';
import './imageCarousel.css';
import '../Jobs/jobs.css';
export default function Carousel(props) {
    const [images, setImages] = useState([]);

    React.useEffect(() => {
        setImages(props.imagesList)
    }, [])
    return (
        <div id="carousel">
            {
                images.map((each, index) => {
                    return <div className="each-image">
                        <img src={each.url} alt="carousel jobs images" className={"carousel-img carousel-img" + index} id={"image" + index} />
                        <div className="job-btn-div"><button className={"job-btn job-btn-"+index} id={"image-btn"+index}><a href={AlumniUrls.jobs} target={"_blank"}>{each.textButton}</a></button></div>
                    </div>
                })
            }
        </div>)
}