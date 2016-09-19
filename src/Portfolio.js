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
              <li className="project-header">
                <a href="jamsessiondbc.herokuapp.com" className="project-link">JamSession</a>
              </li>
                <ul>
                  <li className="project-first-child">
                  Music collaboration and social media platform designed for connecting artists to create songs together</li>
                    <ul>
                      <li className="project-second-child">Also functions as a platform for these collaborations to be showcased and heard by fellow musicians</li>
                      <li className="project-second-child">Includes an in-browser rudimentary mixer on the song edit page, built from scratch using React.js and HTML5</li>
                    </ul>
                  <li className="project-first-child">Build with a Ruby on Rails back-end and a React.js front-end, with the React-Ruby gem</li>
                  <ul>
                    <li className="project-second-child">View the source code on my <a href="https://github.com/TonyNarisi/music-collaboration-dynt" className="project-link">GitHub</a></li>
                  </ul>
                </ul>
              <li className="project-header">
                <a href="https://github.com/TonyNarisi/ParkFinder" className="project-link">ParkFinder</a>
              </li>
                <ul>
                  <li className="project-first-child">A mobile app designed to give people in cities easier access to the parks around them within a walkable radius</li>
                  <li className="project-first-child">Designed in one day with a team of three people for a hackathon at Dev Bootcamp using React Native</li>
                  <li className="project-first-child">Utilizes the React Native Navigator to allow the user to move between screens</li>
                  <ul>
                    <li className="project-second-child">Uses React Native's geolocation API along with the Google Places and Google Directions APIs to locate the user, find nearby parks, and generate walking directions to each park</li>
                  </ul>
                </ul>
              <li className="project-header">About This Site</li>
                <ul>
                  <li className="project-first-child">Built from scratch using React.js, HTML5, and CSS3</li>
                  <li className="project-first-child">Utilizes the React Router and React Scroll libraries to create a smooth single-page experience</li>
                  <li className="project-first-child">Always evolving and allows me a place to experiment with new techniques and design decisions</li>
                  <ul>
                    <li className="project-second-child">View the source code on my <a href="https://github.com/TonyNarisi/personal-site" className="project-link">GitHub</a></li>
                  </ul>
                </ul>
            </ul>
          </div>
          <div className={"music-list slider " + this.isOpen('Music')} >
            <p className="music-paragraph">In my spare time, when I'm not coding, one of my favorite hobbies is playing music and songwriting. Most of my music can be characterized as trying to invoke contrasting moods simultaneously. For example, in "An Evening in Your Arms" below, the keyboards have a playful, light timbre while playing a chord structure of C Major and E Minor, a pairing that conveys a sense of dread and foreboding.</p>
            <p className="music-paragraph">My music contains a lot of influences from ambient and experimental electronic artists, indie lo-fi musicians, and the early 90's East coast hip-hop.</p>
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