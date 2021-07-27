import tandw from './tw.jpg';
import './tandw.css';
export function TrainingAndWorkshops() {
    return (
        <div id="workshops" className="section">
            <h1>Trainings And Workshops</h1>
            <div className="tandw">
                <img src={tandw} alt="trainings and workshops image"></img>
                <h6>A platform that enables alumni and students to interact with each other.</h6>
            </div>
        </div>
    );
}