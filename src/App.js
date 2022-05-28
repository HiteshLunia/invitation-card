import "./App.css";
import EventCard from "./components/EventCard";
import EventHeader from "./components/eventHeader";
import FooterComp from "./components/footerComp";
import ImageCard from "./components/imageCard";
import LocationComp from "./components/locationComp";
import SimpleAccordion from "./components/SimpleAccordian";

function App() {
  return (
    <div className="App">
      <div class="container name-tag">
        <div id="name-tag-heading"> Prakash & Sangita</div>
        {/* <h2 class="conatiner home-header">Prakash & Sangita</h2> */}
        <p class="text1">
          We invite you to join us in celebration 25 years of love and
          togetherness
        </p>
      </div>
      <div class="container text-message">
        <br />
        <p class="text1"> Let us show you their journey!! </p>
      </div>
      <SimpleAccordion />
      <EventHeader />
      <div class="container" >
        <div class="responsive-map">
          <iframe title="direction" id="direction-comp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8329883057177!2d88.35571131427399!3d22.58534893819592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774ad25be03d%3A0x2a0df0e7abe4513d!2sAJ&#39;s%20Banquet!5e0!3m2!1sen!2sin!4v1653723630379!5m2!1sen!2sin" 
               allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
