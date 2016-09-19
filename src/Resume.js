import React, { Component } from 'react';
import './resume.css';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {
      selected: "Experience"
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
      <div id="resume-div">
        <ul id="resume-headers">
          <li className={this.isActive('Experience')} 
            onClick={this.setSelected.bind(this, 'Experience')} >
            Experience
          </li>
          <li className={this.isActive('Skills')} onClick={this.setSelected.bind(this, 'Skills')} >
            Skills
          </li>
          <li className={this.isActive('Education')} onClick={this.setSelected.bind(this, 'Education')} >
            Education
          </li>
        </ul>
        <div className="resume-list">
          <div className={"experience-list slider " + this.isOpen('Experience')}>
            <ul>
              <li className="no-bullet"><span className="job-title">Community Operations Manager</span>
                <ul>
                  <li className="no-bullet">Coney Island Preparatory Public Charter School</li>
                  <li className="no-bullet">Brooklyn, NY</li>
                  <li className="no-bullet">July 2015 - June 2016</li>
                  <ul>
                    <li>Revamped the tools for future office managers to use, incorporating several automated spreadsheets to increase efficiency and allow for parents, teachers, and staff to receive accurate and timely information</li>
                    <li>Coordinated with the school nurse to ensure that all students had proper documentation for all medical issues, bringing school into full compliance with New York City and State guidelines</li>
                  </ul>
                </ul>
              </li>
              <li className="no-bullet"><span className="job-title">Office Manager</span>
                <ul>
                  <li className="no-bullet">Coney Island Preparatory Public Charter School</li>
                  <li className="no-bullet">Brooklyn, NY</li>
                  <li className="no-bullet">October 2014 - June 2015</li>
                  <ul>
                    <li>Initiated and organized family and community-oriented events at the school, including many that are now held regularly and are an integral part of the school's traditions</li>
                    <li>Re-organized the school's physical and electronic filing systems, allowing for much easier access to a student's information and increasing the safety of all children attending the school</li>
                  </ul>
                </ul>
              </li>
              <li className="no-bullet"><span className="job-title">Summer Programming Intern</span>
                <ul>
                  <li className="no-bullet">826LA</li>
                  <li className="no-bullet">Los Angeles, CA</li>
                  <li className="no-bullet">June 2014 - August 2014</li>
                  <ul>
                    <li>Designed the After-School Creative Writing Tutoring curriculum for Fall 2014</li>
                    <li>Co-taught a weekly journalism workshop and a science-fiction writing workshop for adolescents, culminating in a finished newspaper and paperback book respectively</li>
                  </ul>
                </ul>
              </li>
              <li className="no-bullet"><span className="job-title">Writing Fellow</span>
                <ul>
                  <li className="no-bullet">University of Delaware</li>
                  <li className="no-bullet">Newark, DE</li>
                  <li className="no-bullet">September 2011 - May 2013</li>
                  <ul>
                    <li>Fostered the ability of students to generate well-written papers that clearly communicate their thoughts and arguments</li>
                    <li>Worked with a group of freshmen students in individualized tutoring sessions for an entire semester</li>
                    <li>Consulted with faculty members in the English department regarding standards of writing</li>
                  </ul>
                </ul>
              </li>
              <li className="no-bullet"><span className="job-title">Customer Service Representative</span>
                <ul>
                  <li className="no-bullet">Wegman's</li>
                  <li className="no-bullet">Downingtown, PA</li>
                  <li className="no-bullet">April 2007 - August 2013</li>
                  <ul>
                    <li>Designed and structured seasonal displays to drive sales</li>
                    <li>Managed and trained new employees</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </div>
          <div className={"skills-list slider " + this.isOpen('Skills')}>
            <ul>
              <li className="no-bullet">
                <span className="skill-category">Technical</span>
                <ul>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>Sinatra</li>
                  <li>RSpec</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>React Native</li>
                  <li>jQuery</li>
                  <li>Jasmine</li>
                  <li>SQL</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>Heroku</li>
                </ul>
              </li>
              <li className="no-bullet">
                <span className="skill-category">Organizational</span>
                <ul>
                  <li>Agile Methodologies</li>
                  <li>Object-Oriented Design</li>
                  <li>Pair Programming</li>
                  <li>Project Management</li>
                  <li>Test-Driven Development</li>
                  <li>Git Workflow</li>
                </ul>
              </li>
              <li className="no-bullet">
                <span className="skill-category">Personal</span>
                <ul>
                  <li>Interpersonal Communication</li>
                  <li>Writing</li>
                  <li>Organization</li>
                  <li>Creativity</li>
                  <li>Time Management</li>
                  <li>Motivation</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={"education-list slider " + this.isOpen('Education')}>
            <ul>
              <li className="no-bullet">
                <span className="school-title">Dev Bootcamp</span>
                <ul>
                  <li>2016</li>
                  <li>19-week intensive full-stack development program</li>
                  <li>Language skills centered on Ruby and JavaScript, specifically using Ruby on Rails and React.js</li>
                  <li>Project management skills focused on test-driven development, pair programming, and Agile methodologies</li>
                </ul>
              </li>
              <li className="no-bullet">
                <span className="school-title">University of Delaware</span>
                <ul>
                  <li>2013</li>
                  <li>B.A.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}