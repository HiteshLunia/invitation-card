import './App.css';
import EventCard from './components/EventCard';
import ImageCard from './components/imageCard';
import SimpleAccordion from './components/SimpleAccordian';
import desktopImage from './images/background-autumn.jpg';
import mobileImage from './images/background-autumn_phone.jpg';

function App() {
  return (
    <div className="App">
      <h2 class="conatiner home-heading">Prakash & Sangita</h2>
      <p class="home-text">We invite you to join us in celebration 25 years of love and togetherness</p>    
      <SimpleAccordion/>
      <EventCard/>
    </div>
  );
}

export default App;
