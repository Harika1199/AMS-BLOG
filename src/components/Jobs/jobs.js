import AlumniUrls from "../../utils/urls";
import Carousel from "../Carousel/imageCarousel";
import postJobImage from './postJob.png';
import applyJobImage from './applyJob.png';
import jobsListImage from './jobs.png';
import './jobs.css';
import '../Carousel/imageCarousel.css';
export function Jobs() {
    return (
        <div id="jobs" className="section">
            <h1>Jobs</h1>
            <div>
                <Carousel imagesList={[jobsListImage,postJobImage,applyJobImage]}/>
            </div>
            <div className="jobs-btns">
                <a href={AlumniUrls.jobs} className="job-btn job-btn-list">Learn More</a> 
                <a href={AlumniUrls.jobs} className="job-btn job-btn-post">Post A Job</a>
                <a href={AlumniUrls.jobs} className="job-btn job-btn-apply">Apply For Job</a>
            </div>
        </div>
    );
}