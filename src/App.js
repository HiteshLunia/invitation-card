import "./App.css";
import EventHeader from "./components/eventHeader";
import FooterComp from "./components/footerComp";
import SimpleAccordion from "./components/SimpleAccordian";
import LocationComp from "./components/locationComp"

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
      <LocationComp/>
      <FooterComp />
    </div>
  );
}

export default App;
