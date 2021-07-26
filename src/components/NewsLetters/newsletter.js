import './newsletter.css';
export function NewsLetter() {
    return (
        <div id="newsletter" className="section">
            <h1>Sign Up News Letter</h1>
            <div className="subscribe-block">
                <input type="text" placeholder="Enter Email Address" className="input-email"></input>
                <button className="subscribe-btn">Subscribe</button>
            </div>
        </div>
    );
}