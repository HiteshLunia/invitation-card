import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FirstImage from "./images/IMG_20220525_223912812_HDR_DOC-min.jpg";
import FirstImage1 from "./images/IMG_20220530_232254.jpg";
import WeddingImage from "./images/IMG_20220525_224924181_HDR_DOC - Copy.jpg";
import ReceptionImage from "./images/IMG_20220525_224806477_HDR_DOC-min.jpg";
import HiteshImage from "./images/IMG_20220520_225730316_DOC-min.jpg"
import HiteshImage2 from "./images/IMG_20220530_230434.jpg"
import HiteshImage3 from "./images/IMG_20220530_230600.jpg"
import PrateekImage from "./images/IMG_20220530_231628.jpg"
import PrateekImage3 from "./images/IMG_20220530_231726.jpg"
import VacationImage from "./images/IMG_20211227_221907-min.jpg"
import VacationImage2 from "./images/IMG-20200112-WA0006.jpg"
import VacationImage3 from "./images/IMG_20220528_230306-min.jpg"
import RecentImage from "./images/IMG_20220530_231902.jpg"
import RecentImage2 from "./images/IMG_20211104_211333-min.jpg"
import RecentImage3 from "./images/IMG_20220530_232019.jpg"
import "./SimpleAccordian.css";
import ImageGallery from "./imageGallery";

export default function SimpleAccordion() {
  return (
    <div class="container main-acc">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>When they first met</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>First picture together</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src={FirstImage1}
                  alt="FirstImage"
                ></img>
                <img
                  class="main-img1"
                  src={FirstImage}
                  alt="FirstImage"
                ></img>   
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>They tied the knot in '97</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>18th June, 1997.</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src={WeddingImage}
                  alt="WeddingImage"
                ></img>
                <img
                  class="main-img1"
                  src={ReceptionImage}
                  alt="ReceptionImage"
                ></img>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Family Vacations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>First Trip Together</h1>
            <ImageGallery />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>First Child</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>Enters Hitesh &#128526;</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src={HiteshImage3}
                  alt="HiteshImage"
                ></img>
                <img
                  class="main-img1"
                  src={HiteshImage2}
                  alt="HiteshImage"
                ></img>
                <img
                  class="main-img1"
                  src={HiteshImage}
                  alt="HiteshImage"
                ></img>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Second Child</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>Enters Prateek &#128526;</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src={PrateekImage}
                  alt="PrateekImage"
                ></img>
                {/* <img
                  class="main-img1"
                  src={PrateekImage2}
                  alt="PrateekImage"
                ></img> */}
                <img
                  class="main-img1"
                  src={PrateekImage3}
                  alt="PrateekImage"
                ></img>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Family Pictures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>Memories</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src={RecentImage}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={RecentImage3}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={VacationImage2}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={VacationImage3}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={VacationImage}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={RecentImage2}
                  alt="FamilyImage"
                ></img>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
