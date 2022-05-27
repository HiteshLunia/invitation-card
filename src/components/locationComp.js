import React, { Component } from "react";

class LocationComp extends Component {
  render() {
    return (
      <section className="layout" id="location">
        <h1 class="section-heading">Location</h1>
        <div class="container loc-container">
          <button type="button" class="loc_collapsible one">
            <i class="fas fa-map-marker-alt event-font"></i>&nbsp;&nbsp;Sangeet
            <i class="fas fa-plus fa-1x loc-font" style="margin-top:5px;"></i>
          </button>
          <div class="loc_content">
            <div class="row">
              <div class="col-md-6 get-map">
                <div class="responsive-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13410.444742356789!2d88.4589711093104!3d22.618901618076045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fefcf97cbe7%3A0x3da418f1ee54198c!2sEmerald%20Banquet%20Hall!5e0!3m2!1sen!2sin!4v1637403751479!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    // style="border:2px solid black;"
                  ></iframe>
                </div>
              </div>
              <div class="col-md-6 get-directions">
                <form
                  action="http://maps.google.com/maps"
                  method="get"
                  target="_blank"
                >
                  <label class="map-label" for="saddr">
                    Enter your location
                  </label>
                  <br />
                  <div class="map-text">
                    <input type="text" name="saddr" placeholder="Search.." />
                    <br />
                    <input type="hidden" name="daddr" value="Emerald Banquet" />
                  </div>
                  <input type="submit" value="Get directions" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LocationComp;
