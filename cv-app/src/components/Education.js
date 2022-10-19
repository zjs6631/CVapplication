import React, { Component } from "react";
import App from "../App";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.educationArr.map((education) => {
          return (
            <p key={education.id}>
              {education.university}
              <br></br>
              {education.study}
              <br></br>
              {education.dateOfStudy}
              <br></br>
              {education.gpa}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Education;
