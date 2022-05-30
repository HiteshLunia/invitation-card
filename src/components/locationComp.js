import React, { Component } from "react";

class LocationComp extends Component {
  render() {
    return (
      <div class="container" >
        <h1 class="location-heading"> Location : </h1>
        <div class="responsive-map">
          <iframe title="direction" id="direction-comp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8329883057177!2d88.35571131427399!3d22.58534893819592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774ad25be03d%3A0x2a0df0e7abe4513d!2sAJ&#39;s%20Banquet!5e0!3m2!1sen!2sin!4v1653723630379!5m2!1sen!2sin" 
               allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
      </div>
    );
  }
}

export default LocationComp;
