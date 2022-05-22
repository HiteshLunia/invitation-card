import React, { Component } from 'react';
import Image1 from './images/IMG-20210708-WA0030.jpg';

class ImageGallery extends Component {
    state = {  } 
    render() { 
        return (
            <div class="container">
              <div>
                <img class="main-img1" src={Image1} alt='FamilyImage'></img>
                <img class="main-img1" src={Image1} alt='FamilyImage'></img>
                <img class="main-img1" src='\images\IMG-20210708-WA0063.jpg' alt='FamilyImage'></img>
              </div>
            </div>
        );
    }
}
 
export default ImageGallery;