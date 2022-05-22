import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FamilyImage from './images/IMG-20210708-WA0053.jpg';
import './SimpleAccordian.css'
import ImageGallery from './imageGallery';

export default function SimpleAccordion() {
  return (
    <div class="main-acc">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>When they first met</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>First picture together</h1>
            <div class="container">
              <div>
                <img class="main-img1" src={FamilyImage} alt='FamilyImage'></img>
                <img class="main-img1" src={FamilyImage} alt='FamilyImage'></img>
                <img class="main-img1" src='\images\IMG-20210708-WA0063.jpg' alt='FamilyImage'></img>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>They tied the knot in '97</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>18th June, 1997.</h1>
            <div class="container">
              <div>
                <img class="main-img1" src={FamilyImage} alt='FamilyImage'></img>
                <img class="main-img1" src={FamilyImage} alt='FamilyImage'></img>
                <img class="main-img1" src='\images\IMG-20210708-WA0063.jpg' alt='FamilyImage'></img>
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
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>Some precious moments together</h1>
            <ImageGallery/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h1>18th June, 1997.</h1>
            <div class="container">
              <div>
                <img class="main-img1" src={FamilyImage} alt='FamilyImage'></img>
                <img class="main-img1" src={FamilyImage} alt='FamilyImage'></img>
                <img class="main-img1" src='\images\IMG-20210708-WA0063.jpg' alt='FamilyImage'></img>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
