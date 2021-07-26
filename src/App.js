import './App.css';
import { Header } from './components/Header/header';
import { Welcome } from './components/Welcome/welcome';
import { About } from './components/About/about';
import { Jobs } from './components/Jobs/jobs';
import { TrainingAndWorkshops } from './components/TrainingsAndWorkshops/tandw';
import { NewsLetter } from './components/NewsLetters/newsletter';
import { Footer } from './components/Footer/footer'; 

function App() {
  return (
    <div className="App">
      <div className="sections">
        {/* <Header /> */}
        <Welcome />
        <About />
        <Jobs />
        <TrainingAndWorkshops />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
