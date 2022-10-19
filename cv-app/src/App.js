import logo from "./logo.svg";
import "./App.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contactFormShown: false,
      contactButtonText: "Edit",
      educationFormShown: true,
      educationButtonText: "Edit",
      education: {
        university: "default",
        study: "default",
        dateOfStudy: "default",
        gpa: "default",
        id: uniqid(),
      },
      educationHistory: [],
      workFormShown: true,
      workButtonText: "Edit",
      work: {
        company: "default",
        title: "default",
        tasks: [],
        task: {
          description: "task descript",
        },
        dateOfEmployment: "default",
      },
      workHistory: [],
    };

    this.editContact = this.editContact.bind(this);
    this.editEducation = this.editEducation.bind(this);
  }

  editContact = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contactFormShown: !prevState.contactFormShown,
    }));
    if (this.state.contactFormShown) {
      this.setState({
        contactButtonText: "Edit",
      });
    } else {
      this.setState({
        contactButtonText: "Save",
      });
    }
    console.log(this.state.contactFormShown);
  };

  editEducation = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      educationFormShown: !prevState.educationFormShown,
    }));
    if (this.state.educationFormShown) {
      this.setState({
        educationButtonText: "Edit",
      });
    } else {
      this.setState({
        educationButtonText: "Save",
      });
    }
  };

  handleUniChange = (e) => {
    this.setState({
      education: {
        university: e.target.value,
        study: this.state.education.study,
        dateOfStudy: this.state.education.dateOfStudy,
        gpa: this.state.education.gpa,
        id: this.state.education.id,
      },
    });
  };

  handleStudyChange = (e) => {
    this.setState({
      education: {
        university: this.state.education.university,
        study: e.target.value,
        dateOfStudy: this.state.education.dateOfStudy,
        gpa: this.state.education.gpa,
        id: this.state.education.id,
      },
    });
  };

  handleDateOfStudyChange = (e) => {
    this.setState({
      education: {
        university: this.state.education.university,
        study: this.state.education.study,
        dateOfStudy: e.target.value,
        gpa: this.state.education.gpa,
        id: this.state.education.id,
      },
    });
  };

  handleGpaChange = (e) => {
    this.setState({
      education: {
        university: this.state.education.university,
        study: this.state.education.study,
        dateOfStudy: this.state.education.dateOfStudy,
        gpa: e.target.value,
        id: this.state.education.id,
      },
    });
  };

  onEducationFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      educationHistory: this.state.educationHistory.concat(
        this.state.education
      ),
      education: {
        university: "default",
        study: "default",
        dateOfStudy: "default",
        gpa: "default",
        id: uniqid(),
      },
      educationFormShown: true,
    });
  };

  handleCompanyChange = (e) => {
    this.setState({
      work: {
        company: e.target.value,
        title: this.state.work.title,
        tasks: this.state.work.tasks,
        task: {
          description: this.state.work.task.description,
        },
        dateOfEmployment: this.state.work.dateOfEmployment,
      }
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      work: {
        company: this.state.work.company,
        title: e.target.value,
        tasks: this.state.work.tasks,
        task: {
          description: this.state.work.task.description,
        },
        dateOfEmployment: this.state.work.dateOfEmployment,
      }
    });
  };

  handleTaskChange = (e) => {
    this.setState({
      work: {
        company: this.state.work.company,
        title: this.state.work.title,
        tasks: this.state.work.tasks,
        task: {
          description: e.target.value,
        },
        dateOfEmployment: this.state.work.dateOfEmployment,
      }
    });
  };

  handleDateOfEmploymentChange = (e) => {
    this.setState({
      work: {
        company: this.state.work.company,
        title: this.state.work.title,
        tasks: this.state.work.tasks,
        task: {
          description: this.state.work.task.description,
        },
        dateOfEmployment: e.target.value,
      }
    });
  };

  onWorkFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      workHistory: this.state.workHistory.concat(this.state.work),
      work: {
        company: "default",
        title: "default",
        tasks: [],
        task: {
          description: "default",
        },
        dateOfEmployment: "default",
      }
    })
  }

  render() {
    const {
      education,
      work,
    } = this.state;
    if (this.state.educationFormShown) {
      return (
        <div>
          <ContactInfo formShown={this.state.contactFormShown} />
          <button id="editBtn" onClick={this.editContact}>
            {this.state.contactButtonText}
          </button>
          <div
            className="educationFormContainer"
            
          >
            <form className="educationForm" onSubmit={this.onEducationFormSubmit}>
              <label htmlFor="uniInput">Enter university: </label>
              <input
                type="text"
                id="uniInput"
                onChange={this.handleUniChange}
                value={education.university}
              />
              <br></br>
              <label htmlFor="studyInput">Enter program of study: </label>
              <input
                type="text"
                id="studyInput"
                onChange={this.handleStudyChange}
                value={education.study}
              />
              <br></br>
              <label htmlFor="dateOfStudyInput">Enter date of study: </label>
              <input
                type="text"
                id="dateOfStudyInput"
                onChange={this.handleDateOfStudyChange}
                value={education.dateOfStudy}
              />
              <br></br>
              <label htmlFor="gpaInput">Enter GPA: </label>
              <input
                type="text"
                id="gpaInput"
                onChange={this.handleGpaChange}
                value={education.gpa}
              />
              <br></br>

              <button type="submit">Add Education</button>
            </form>
          </div>
          <Education educationArr={this.state.educationHistory} /><br></br>

          <div className="workFormContainer">
            <form className="workForm" onSubmit={this.onWorkFormSubmit}>
              <label htmlFor="companyInput">Enter company: </label>
              <input type="text" id="companyInput" onChange={this.handleCompanyChange} value={work.company}/><br></br>
              <label htmlFor="titleInput">Enter job title: </label>
              <input type="text" id="titleInput" onChange={this.handleTitleChange} value={work.title}/><br></br>
              <label htmlFor="tasksInput">Enter main tasks: </label>
              <input type="text" id="tasksInput" onChange={this.handleTaskChange} value={work.task.description}/><br></br>
              <label htmlFor="dateOfEmployment">Enter date range of employment: </label>
              <input type="text" id="dateOfEmploymentInput" onChange={this.handleDateOfEmploymentChange} value={work.dateOfEmployment}/><br></br>

              <button type="submit">Add Employment</button>
            </form>
          </div>
          <WorkExp workArr={this.state.workHistory}/><br></br>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default App;
