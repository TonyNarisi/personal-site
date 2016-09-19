import React, { Component } from 'react';
import GrandCanyon from './images/TonyGrandCanyon.png';
import Field from './images/TonyInField.png';
import './index.css';
import Scroll from 'react-scroll';

export default class WelcomePage extends Component {
  constructor() {
    super();
    this.scrollToMiddle = this.scrollToMiddle.bind(this);
  }

  scrollToMiddle() {
    var element = document.getElementById('welcome-page-intro');
    Scroll.animateScroll.scrollTo(element.offsetHeight + 60);
  }

  render() {
    return (
      <div>
        <div id="welcome-image-holder">
          <div id="top-space"></div>
          <h1 id="full-name">Tony Narisi</h1>
          <h2 id="fullstack-title">Full-Stack Developer</h2>
        </div>
        <div id="scroll-down" onClick={this.scrollToMiddle}>
          <div id="down-arrow"></div>
        </div>
        <div id="welcome-page-images">
          <section id="image-holder">
            <img src={GrandCanyon} id="grand-canyon-image" alt="grand-canyon" />
            <img src={Field} id="field-image" alt="field" />
          </section>
        </div>
        <div id="welcome-page-intro">
          <section className="top-section">
            <p>"No computer is ever going to ask a new, reasonable question. It takes trained people to do that."</p>
            <p>- Grace Hopper</p>
          </section>
          <section className="bottom-section">
            <ul id="bio-list">
              <li>Former educator turned full-stack developer</li>
              <div className="border"></div>
              <li>Nature enthusiast, writer, and musician</li>
              <div className="border"></div>
              <li>Inspired by a desire to help others</li>
              <div className="border"></div>
              <li>Constantly excited by the amount of things left to learn</li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}