import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FamilyImage from "./images/IMG-20210708-WA0053.jpg";
import FirstImage from "./images/IMG_20220525_223912812_HDR_DOC.jpg";
import WeddingImage from "./images/IMG_20220525_224924181_HDR_DOC.jpg";
import ReceptionImage from "./images/IMG_20220525_224806477_HDR_DOC.jpg";
import HiteshImage from "./images/IMG_20220520_225730316_DOC.jpg"
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
                  alt="FamilyImage"
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
                  src={HiteshImage}
                  alt="HiteshImage"
                ></img>
                <img
                  class="main-img1"
                  src={FamilyImage}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src="\images\IMG-20210708-WA0063.jpg"
                  alt="FamilyImage"
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
                  src="\images\IMG_20220520_225730316_DOC.jpg"
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={FamilyImage}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src="\images\IMG-20210708-WA0063.jpg"
                  alt="FamilyImage"
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
          <Typography>Family Vacations</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>Kashmir Trip</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src="\images\IMG_20220520_225730316_DOC.jpg"
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={FamilyImage}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src="\images\IMG-20210708-WA0063.jpg"
                  alt="FamilyImage"
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
          <Typography>Recent Pictures</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>Family Memories</h1>
            <div class="container">
              <div>
                <img
                  class="main-img1"
                  src="\images\IMG_20220520_225730316_DOC.jpg"
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src={FamilyImage}
                  alt="FamilyImage"
                ></img>
                <img
                  class="main-img1"
                  src="\images\IMG-20210708-WA0063.jpg"
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
