import React, { Component } from 'react';
import { Link } from 'react-router';
import Scroll from 'react-scroll';

export default class App extends Component {
  constructor() {
    super();
    this.scrollToFooter = this.scrollToFooter.bind(this);
  }

  scrollToFooter() {
    Scroll.animateScroll.scrollTo(document.body.offsetHeight);
  }

  scrollToTop() {
    Scroll.animateScroll.scrollTo(0);
  }

  render() {
    return (
      <div>
        <div id="nav-div">
          <Link to="/" id="nav-name" onClick={this.scrollToTop} >Tony Narisi</Link>
          <ul id="nav-list">
            <li><Link to="/" onClick={this.scrollToTop}>Home</Link></li>
            <li><a href="#/contact" onClick={this.scrollToFooter}>Contact</a></li>
            <li><Link to="/portfolio" onClick={this.scrollToTop}>Portfolio</Link></li>
            <li><Link to="/resume" onClick={this.scrollToTop}>Résumé</Link></li>
          </ul>
        </div>
        <div id="page-contents">
          {this.props.children}
        </div>
        <div id="contact-footer">
          <section id="left-contact">
            <p>This site was originally designed and developed by Tony Narisi during September 2016.</p>
            <p>Contact by e-mail at <a href="mailto:tonynarisi@gmail.com">tonynarisi@gmail.com</a>.</p>
          </section>
          <section id="right-contact">
            <p className="top-margin-text">For more information, check out my <a href="https://github.com/TonyNarisi">GitHub</a> and <a href="https://www.linkedin.com/in/tonynarisi">LinkedIn</a> accounts.</p>
            <p>Thank you for visiting this site.</p>
          </section>
        </div>
      </div>
    );
  }
}