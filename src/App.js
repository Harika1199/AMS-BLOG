import * as React from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { Welcome } from './components/Welcome/welcome';
import { About } from './components/About/about';
import { Jobs } from './components/Jobs/jobs';
import { TrainingAndWorkshops } from './components/TrainingsAndWorkshops/tandw';
import { NewsLetter } from './components/NewsLetters/newsletter';
import { Footer } from './components/Footer/footer';


function App() {

  // Scroll to Top Variables
  const [showScrollTop, setScrollTop] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(false);

  // Check the scroll event and set condition at what point we need the scroll to top button
  React.useEffect(() => {
    document.addEventListener('scroll', function (event) {
      if (event.srcElement['scrollingElement']['scrollTop'] > 10) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      if (event.srcElement['scrollingElement']['scrollTop'] > 50) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }, true);
  }, []);

  //Handle the scroll to top button 
  const handleScrollTop = () => {
    setScrollTop(false);
    var elmnt = document.getElementById("contentMain");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="App">
      {/* <i className="fa fa-arrow-up" aria-hidden="true"></i> */}
      <div className="sections">

        {showHeader && <Header />}
        <Welcome />
        <About />
        <Jobs />
        <TrainingAndWorkshops />
        <NewsLetter />
        <Footer />
      </div>
      {showScrollTop && <button className="scrollTop" onClick={() => handleScrollTop()}>top</button>}
    </div>
  );
}

export default App;
