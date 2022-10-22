import React, { Component } from "react";
import App from "../App";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="allEducation">
        <div id="educationHeader">
          <p>Education</p>
        </div>
        {this.props.educationArr.map((education) => {
          return (
            <div key={education.id} className="eduDescription">
              <p className="gradYear">{education.dateOfStudy}</p>
              <div className="majorgpa">
                <p className="major">{education.study}</p>
                <p className="gpa">GPA: {education.gpa}</p>
              </div>
              <p className="university">{education.university}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
