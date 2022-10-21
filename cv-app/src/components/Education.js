import React, { Component } from "react";
import App from "../App";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="allEducation">
        {this.props.educationArr.map((education) => {
          return (
            <div key={education.id} className="eduDescription">
            <p className="uniName">
              {education.university}
            </p>
            
            <p className="majorName">
              {education.study}<br></br>   gpa: {education.gpa}  
              <br></br>completed: {education.dateOfStudy} 
            </p>
            
            
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
