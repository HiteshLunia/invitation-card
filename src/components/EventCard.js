import React, { Component } from 'react';
import './eventCard.css'
import 'bootstrap/dist/css/bootstrap.css'

class EventCard extends Component {
    render() { 
        return (
            <section class="layout-event px-md-5">
              <div class="col-lg-6 col-md-offset-2 event-card">
                <div class="row justify-content-around">
                  <div class="col-10 event-content">
                    <h3>25th Anniversary Celebration</h3>
                  </div>
                  <div class="col-10">
                      <div class="row event-content">
                        <div class="col-5"> <span>Time: 7:00 p.m. onwards</span><br/></div>
                        <div class="col-5"> <span>18th June, 2022</span><br/>
                        <span>Saturday</span></div>

                      </div>
                  </div>
                  <div class="col-10 event-content">AJ's Banquet</div>
                  <div class="col-10 event-content">
                    <span> 263 Rabindra Sarani G Centre Mall </span><br/>
                    <span> 5th Floor </span>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
 
export default EventCard;