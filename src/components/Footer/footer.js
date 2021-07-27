import './footer.css';
export function Footer() {
    return (
        <div className="section">
            <div className="section footer-sec">
                <div className="about-ams">
                    <h1>About AMS</h1>
                    <p>The Application of Alumni management system is used to maintain data of Alumni and to provide a platform where Alumni can see the progress of an institution and also participate in improving institution condition with help of donation.</p>
                </div>
                <div>
                    <h1>Follow Us</h1>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-google"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                </div>
            </div>
            <div className="email-ams">
                <p>@alumni | Email: ams@gmail.com</p>
            </div>
        </div>
    );
}