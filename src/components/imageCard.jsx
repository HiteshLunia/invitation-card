import React, { Component } from 'react';
import './imageCard.css';

class ImageCard extends Component {
    render() { 
        return (
            <section class="layout" id="home">
                <div class="container home-img">
                <img class="main-img" src='\images\IMG-20210708-WA0053.jpg' alt="bride-groom.jpg" />
                </div>
            </section>
        );
    }
}
 
export default ImageCard;