import "./App.css";
import EventHeader from "./components/eventHeader";
import FooterComp from "./components/footerComp";
import SimpleAccordion from "./components/SimpleAccordian";
import LocationComp from "./components/locationComp";
import Divider from "./components/images/divider.png";

function App() {
  return (
    <div className="App">
      <div class="container name-tag">
        <div id="name-tag-heading"></div>
        {/* <h2 class="conatiner home-header">Prakash & Sangita</h2> */}
        <p class="text1">
          Once upon a time.... <br/>
          Prakash & Sangita <br/>
          Took 7 vows of marriage together <br/>
          And joined hands in matrimony <br/>
          </p>
          <p class="text2">
          This year marks 25 Years of their Marriage<br/>
        </p>
      </div>
      <div class="container name-tag">
        <p class="text3"> Let us show you a glimpse of their journey!!<br/></p>
      </div>
      <SimpleAccordion />
      <br/>
      <div id="container name-tag-heading">
        <p class="text1">Lunia family invites you to join us in celebrating 25 years their of love and
          togetherness</p>
      </div>
      <EventHeader />
      <LocationComp/>
      <FooterComp />
    </div>
  );
}

export default App;
