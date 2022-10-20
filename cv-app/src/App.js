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
      formShown: false,
      addButtonText: "Add Experience",
      editExp: false,
      editExpBtnText: "Edit Experience",
      education: {
        university: "default",
        study: "default",
        dateOfStudy: "default",
        gpa: "default",
        id: uniqid(),
      },
      educationHistory: [],
      workButtonText: "Edit",
      work: {
        company: "default",
        title: "default",
        tasks: [],
        task: {
          description: "task descript",
        },
        dateOfEmployment: "default",
        id: uniqid(),
      },
      workHistory: [],
    };

    this.editContact = this.editContact.bind(this);
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
  };

  addInfo = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      formShown: !prevState.formShown,
    }));
    if (this.state.formShown) {
      this.setState({
        addButtonText: "Add Experience",
      });
    } else {
      this.setState({
        addButtonText: "Save",
      });
    }
  };

  editExp = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editExp: !prevState.editExp,
    }));
    if (this.state.editExp) {
      this.setState({
        editExpBtnText: "Edit Experience",
      });
    } else {
      this.setState({
        editExpBtnText: "Save",
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
      formShown: true,
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
      },
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
      },
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
      },
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
      },
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
        id: uniqid(),
      },
    });
  };

  render() {
    const { education, work } = this.state;
    if (this.state.formShown) {
      return (
        <div>
          <ContactInfo formShown={this.state.contactFormShown} />
          <button id="editBtn" onClick={this.editContact}>
            {this.state.contactButtonText}
          </button>
          <div className="educationFormContainer">
            <form
              className="educationForm"
              onSubmit={this.onEducationFormSubmit}
            >
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
          <Education educationArr={this.state.educationHistory} />
          <br></br>

          <div className="workFormContainer">
            <form className="workForm" onSubmit={this.onWorkFormSubmit}>
              <label htmlFor="companyInput">Enter company: </label>
              <input
                type="text"
                id="companyInput"
                onChange={this.handleCompanyChange}
                value={work.company}
              />
              <br></br>
              <label htmlFor="titleInput">Enter job title: </label>
              <input
                type="text"
                id="titleInput"
                onChange={this.handleTitleChange}
                value={work.title}
              />
              <br></br>
              <label htmlFor="tasksInput">Enter main tasks: </label>
              <input
                type="text"
                id="tasksInput"
                onChange={this.handleTaskChange}
                value={work.task.description}
              />
              <br></br>
              <label htmlFor="dateOfEmployment">
                Enter date range of employment:{" "}
              </label>
              <input
                type="text"
                id="dateOfEmploymentInput"
                onChange={this.handleDateOfEmploymentChange}
                value={work.dateOfEmployment}
              />
              <br></br>

              <button type="submit">Add Employment</button>
            </form>
          </div>
          <WorkExp workArr={this.state.workHistory} />
          <br></br>
          <button id="addBtn" onClick={this.addInfo}>
            {this.state.addButtonText}
          </button>
          <button id="editExpBtn" onClick={this.editExp}>
            {this.state.editExpBtnText}
          </button>
        </div>
      );
    } else if (this.state.editExp) {
      return (
        <div>
          {this.state.educationHistory.map((education) => {
            return(
            <form
              className="educationForm"
              key={education.id}
            >
              <label htmlFor="uniInput">{education.university}</label>
              <input
                type="text"
                id="uniInput"
                onChange={this.handleUniChange}
                defaultValue={education.university}
              />
              <br></br>
              <label htmlFor="studyInput">Enter program of study: </label>
              <input
                type="text"
                id="studyInput"
                onChange={this.handleStudyChange}
                defaultValue={education.study}
              />
              <br></br>
              <label htmlFor="dateOfStudyInput">Enter date of study: </label>
              <input
                type="text"
                id="dateOfStudyInput"
                onChange={this.handleDateOfStudyChange}
                defaultValue={education.dateOfStudy}
              />
              <br></br>
              <label htmlFor="gpaInput">Enter GPA: </label>
              <input
                type="text"
                id="gpaInput"
                onChange={this.handleGpaChange}
                defaultValue={education.gpa}
              />
              <br></br>

              
            </form>
            )
          })}
          <button type="submit" id="editExpBtn" onClick={this.editExp}>
            {this.state.editExpBtnText}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <ContactInfo formShown={this.state.contactFormShown} />
          <button id="editBtn" onClick={this.editContact}>
            {this.state.contactButtonText}
          </button>
          <Education educationArr={this.state.educationHistory} />
          <br></br>
          <WorkExp workArr={this.state.workHistory} />
          <br></br>
          <button id="addBtn" onClick={this.addInfo}>
            {this.state.addButtonText}
          </button>
          <button id="editExpBtn" onClick={this.editExp}>
            {this.state.editExpBtnText}
          </button>
        </div>
      );
    }
  }
}
export default App;
