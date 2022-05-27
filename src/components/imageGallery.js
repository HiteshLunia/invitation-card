import React, { Component } from 'react';
import Image1 from './images/IMG-20210708-WA0030.jpg';

class ImageGallery extends Component {
  state = {}
  render() {
    return (
      <div class="container">
        <div>
          <img class="main-img1" src="\images\IMG_20220520_221252077_HDR_DOC.jpg" alt='FamilyImage'></img>
          <img class="main-img1" src="\images\IMG_20220525_230546684_HDR_DOC.jpg" alt='FamilyImage'></img>
          <img class="main-img1" src="\images\IMG_20220520_221502351_HDR_DOC.jpg" alt='FamilyImage'></img>
          <img class="main-img1" src="\images\IMG_20220520_221404996_HDR_DOC.jpg" alt='FamilyImage'></img>
        </div>
      </div>
    );
  }
}

export default ImageGallery;