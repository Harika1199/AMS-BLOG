import Carousel from "../Carousel/imageCarousel";
import postJobImage from './postJob.png';
import applyJobImage from './applyJob.png';
import jobsListImage from './jobs.png';
import './jobs.css';
export function Jobs() {

    const formatImagesDataForCarousel=()=>{
        let formattedList = [{ url: jobsListImage, textButton: 'Learn More' },
        { url: postJobImage, textButton: 'Post A Job' },
        { url: applyJobImage, textButton: 'Apply For Job' }]
        return formattedList;
    }
    return (
        <div id="jobs" className="section">
            <h1>Jobs</h1>
            <div>
                <Carousel imagesList={formatImagesDataForCarousel()} />
            </div>
        </div>
    );
}