import React, { Component } from 'react';
import Image1 from './images/IMG_20220520_221252077_HDR_DOC-min.jpg';
import Image2 from './images/IMG_20220520_221502351_HDR_DOC-min.jpg';
import Image3 from './images/IMG_20220525_230546684_HDR_DOC-min.jpg';

class ImageGallery extends Component {
  state = {}
  render() {
    return (
      <div class="container">
        <div>
          <img class="main-img1" src={Image1} alt='FamilyImage'></img>
          <img class="main-img1" src={Image2} alt='FamilyImage'></img>
          <img class="main-img1" src={Image3} alt='FamilyImage'></img>
        </div>
      </div>
    );
  }
}

export default ImageGallery;