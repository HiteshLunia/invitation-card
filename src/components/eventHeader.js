import React, { Component } from "react";
import "./eventHeader.css";

class EventHeader extends Component {
  render() {
    return (
      <div class="container event-box">
        <div class="address event-details">
          <h1 className="event-heading"> Silver Jubliee Celebration</h1>
          <div id="event-date">
            <h5> Date: 18th June, Saturday</h5>
          </div>
          <div id="venue">
            <h4> Venue: </h4>
            <h4>AJ's Banquet</h4>
            <h5>Time: 6:00 p.m. onwards</h5>
          </div>
          <div id="address-details">
            <h4 id="address-title">Address : </h4>
            <span>263, Rabindra Sarani</span>
            <br />
            <span> G Centre Mall </span>
            <br />
            <span> 5th Floor </span>
          </div>
        </div>
      </div>
    );
  }
}

export default EventHeader;
