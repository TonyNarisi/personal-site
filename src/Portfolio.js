import React, { Component } from 'react';
import './portfolio.css'

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      selected: "Development and Design"
    }
    this.isActive = this.isActive.bind(this);
    this.setSelected = this.setSelected.bind(this);
    this.isOpen = this.isOpen.bind(this);
  }

  isActive(tabName) {
    return (this.state.selected === tabName ? "active" : "inactive")
  }

  isOpen(tabName) {
    return (this.state.selected === tabName ? "" : "closed")
  }

  setSelected(tabName) {
    this.setState({
      selected: tabName
    })
  }

  render() {
    return (
      <div id="portfolio-div">
        <ul id="portfolio-headers">
          <li className={this.isActive('Development and Design')}
            onClick={this.setSelected.bind(this, 'Development and Design')} >
            Development and Design
          </li>
          <li className={this.isActive('Music')}
            onClick={this.setSelected.bind(this, 'Music')} >
            Music
          </li>
        </ul>
        <div className="portfolio-list">
          <div className={"development-list slider " + this.isOpen('Development and Design')} >
            <ul>
              <li>
                <a href="jamsessiondbc.herokuapp.com" className="project-link project-header">JamSession</a>
                <ul>
                  <li className="project-first-child">
                  Music collaboration and social media platform designed for connecting artists with other artists to create songs together
                    <ul>
                      <li className="project-second-child">Also functions as a platform for these collaborations to be showcased and heard by fellow musicians</li>
                      <li className="project-second-child">Includes an in-browser rudimentary mixer on the song edit page, built from scratch using vanilla React.js and HTML5</li>
                    </ul>
                  </li>
                  <li className="project-first-child">Build with a Ruby on Rails back-end and a React.js front-end, with the React-Ruby gem</li>
                </ul>
              </li>
              <li>
                <p className="project-header">About This Site</p>
                <ul>
                  <li className="project-first-child">Built from scratch using React.js, HTML5, and CSS3</li>
                  <li className="project-first-child">Utilizes the React-Router library to create a smooth single-page experience</li>
                  <li className="project-first-child">Always evolving, allowing me a place to experiment with new techniques and design decisions</li>
                </ul>
              </li>
            </ul>
            <p>For the source code of any of these projects, please check out my <a href="https://github.com/TonyNarisi" className="project-link">GitHub</a>!</p>
          </div>
          <div className={"music-list slider " + this.isOpen('Music')} >
            <p className="music-paragraph">In my spare time, when I'm not coding, one of my favorite hobbies is playing music and songwriting. When I write and record music, I find myself, for better or worse, trying to invoke certain moods more than create catchy melodies.</p>
            <p className="music-paragraph">Often, the moods I try to invoke are contrasting. For example, in "An Evening in Your Arms" below, I use keyboards with a playful, light timbre. However, these keyboards are playing a chord structure of C Major and E Minor, a pairing that I find conveys a sense of dread and foreboding exceedingly well.</p>
            <p className="music-paragraph">My music has a lot of influence from ambient and experimental electronic artists, indie lo-fi musicians, and the style of hip-hop that one could easily find throughout the 90's and early 2000's.</p>
            <p className="music-paragraph">I hope you enjoy exploring anything that you hear on this page!</p>
            <ul>
              <li>
                An Evening in Your Arms
                <audio controls>
                  <source src="https://s3.amazonaws.com/jamsession-app/EveningInYourArms.m4a" type="audio/mpeg" />
                </audio>
              </li>
              <li>
                Lost
                <audio controls>
                  <source src="https://s3.amazonaws.com/jamsession-app/Lost.m4a" type="audio/mpeg" />
                </audio>
              </li>
              <li>The Wear</li>
                <audio controls>
                  <source src="https://s3.amazonaws.com/jamsession-app/RiverSongReal.m4a" type="audio/mpeg" />
                </audio>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}