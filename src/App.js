import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/ContactInfo.css";
import "./styles/Education.css";
import "./styles/WorkExp.css";
import uniqid from "uniqid";
import React, { Component } from "react";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import WorkExp from "./components/WorkExp";
import NameHeader from "./components/NameHeader";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contactFormShown: false,
      contactButtonText: "...",
      formShown: false,
      addButtonText: "+",
      editExp: false,
      editExpBtnText: "...",
      education: {
        university: "default",
        study: "default",
        dateOfStudy: "default",
        gpa: "default",
        id: uniqid(),
      },
      educationHistory: [],
      updateEducationArr: [],
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
        contactButtonText: "...",
      });
    } else {
      this.setState({
        contactButtonText: "S",
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
        addButtonText: "+",
      });
    } else {
      this.setState({
        addButtonText: "S",
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
        editExpBtnText: "...",
      });
    } else {
      this.setState({
        editExpBtnText: "S",
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

  handleUniUpdate = (e) => {
    let updateArr = this.state.educationHistory.slice();

    const indexOfTarget = updateArr
      .map((education) => education.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      university: e.target.value,
      study: editRecord[0].study,
      dateOfStudy: editRecord[0].dateOfStudy,
      gpa: editRecord[0].gpa,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      educationHistory: updateArr,
    });
  };

  handleStudyUpdate = (e) => {
    let updateArr = this.state.educationHistory.slice();

    const indexOfTarget = updateArr
      .map((education) => education.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      university: editRecord[0].university,
      study: e.target.value,
      dateOfStudy: editRecord[0].dateOfStudy,
      gpa: editRecord[0].gpa,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      educationHistory: updateArr,
    });
  };

  handleDateOfStudyUpdate = (e) => {
    let updateArr = this.state.educationHistory.slice();

    const indexOfTarget = updateArr
      .map((education) => education.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      university: editRecord[0].university,
      study: editRecord[0].study,
      dateOfStudy: e.target.value,
      gpa: editRecord[0].gpa,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      educationHistory: updateArr,
    });
  };

  handleGpaUpdate = (e) => {
    let updateArr = this.state.educationHistory.slice();

    const indexOfTarget = updateArr
      .map((education) => education.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      university: editRecord[0].university,
      study: editRecord[0].study,
      dateOfStudy: editRecord[0].dateOfStudy,
      gpa: e.target.value,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      educationHistory: updateArr,
    });
  };

  handleCompanyUpdate = (e) => {
    let updateArr = this.state.workHistory.slice();

    const indexOfTarget = updateArr
      .map((work) => work.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      company: e.target.value,
      title: editRecord[0].title,
      task: {
        description: editRecord[0].task.description,
      },
      dateOfEmployment: editRecord[0].dateOfEmployment,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      workHistory: updateArr,
    });
  };

  handleTitleUpdate = (e) => {
    let updateArr = this.state.workHistory.slice();

    const indexOfTarget = updateArr
      .map((work) => work.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      company: editRecord[0].company,
      title: e.target.value,
      task: {
        description: editRecord[0].task.description,
      },
      dateOfEmployment: editRecord[0].dateOfEmployment,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      workHistory: updateArr,
    });
  };

  handleTaskUpdate = (e) => {
    let updateArr = this.state.workHistory.slice();

    const indexOfTarget = updateArr
      .map((work) => work.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      company: editRecord[0].company,
      title: editRecord[0].title,
      task: {
        description: e.target.value,
      },
      dateOfEmployment: editRecord[0].dateOfEmployment,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      workHistory: updateArr,
    });
  };

  handleDateOfEmploymentUpdate = (e) => {
    let updateArr = this.state.workHistory.slice();

    const indexOfTarget = updateArr
      .map((work) => work.id)
      .indexOf(e.target.className);
    let editRecord = updateArr.splice(indexOfTarget, 1);
    editRecord = {
      company: editRecord[0].company,
      title: editRecord[0].title,
      task: {
        description: editRecord[0].task.description,
      },
      dateOfEmployment: e.target.value,
      id: editRecord[0].id,
    };
    updateArr.splice(indexOfTarget, 0, editRecord);
    this.setState({
      workHistory: updateArr,
    });
  };

  render() {
    const { education, work } = this.state;
    if (this.state.formShown) {
      return (
        <div className="addingForm">
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
                Enter date of employment:{" "}
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
          
          <br></br>
          <button id="addBtn" onClick={this.addInfo}>
            {this.state.addButtonText}
          </button>
        </div>
      );
    } else if (this.state.editExp) {
      return (
        <div>
          {this.state.educationHistory.map((education) => {
            return (
              <form className="educationUpdateForm" key={education.id}>
                <label htmlFor="uniUpdateInput">Enter university: </label>
                <input
                  type="text"
                  id="uniUpdateInput"
                  className={education.id}
                  onChange={this.handleUniUpdate}
                  defaultValue={education.university}
                />
                <br></br>
                <label htmlFor="studyUpdateInput">
                  Enter program of study:{" "}
                </label>
                <input
                  type="text"
                  id="studyUpdateInput"
                  className={education.id}
                  onChange={this.handleStudyUpdate}
                  defaultValue={education.study}
                />
                <br></br>
                <label htmlFor="dateOfStudyUpdateInput">
                  Enter date of study:{" "}
                </label>
                <input
                  type="text"
                  id="dateOfStudyUpdateInput"
                  className={education.id}
                  onChange={this.handleDateOfStudyUpdate}
                  defaultValue={education.dateOfStudy}
                />
                <br></br>
                <label htmlFor="gpaUpdateInput">Enter GPA: </label>
                <input
                  type="text"
                  id="gpaUpdateInput"
                  className={education.id}
                  onChange={this.handleGpaUpdate}
                  defaultValue={education.gpa}
                />
                <br></br>
              </form>
            );
          })}
          {this.state.workHistory.map((work) => {
            return (
              <form className="workUpdateForm" key={work.id}>
                <label htmlFor="companyUpdateInput">Enter company: </label>
                <input
                  type="text"
                  id="companyUpdateInput"
                  onChange={this.handleCompanyUpdate}
                  value={work.company}
                  className={work.id}
                />
                <br></br>
                <label htmlFor="titleUpdateInput">Enter job title: </label>
                <input
                  type="text"
                  id="titleUpdateInput"
                  onChange={this.handleTitleUpdate}
                  value={work.title}
                  className={work.id}
                />
                <br></br>
                <label htmlFor="tasksUpdateInput">Enter main tasks: </label>
                <input
                  type="text"
                  id="tasksUpdateInput"
                  onChange={this.handleTaskUpdate}
                  value={work.task.description}
                  className={work.id}
                />
                <br></br>
                <label htmlFor="dateOfEmploymentUpdate">
                  Enter date range of employment:{" "}
                </label>
                <input
                  type="text"
                  id="dateOfEmploymentUpdate"
                  onChange={this.handleDateOfEmploymentUpdate}
                  value={work.dateOfEmployment}
                  className={work.id}
                />
                <br></br>
              </form>
            );
          })}
          <button type="submit" id="editExpBtn" onClick={this.editExp}>
            {this.state.editExpBtnText}
          </button>
        </div>
      );
    } else {
      return (
        <div id="App">
          <NameHeader />
          <ContactInfo formShown={this.state.contactFormShown} />
          <button id="editBtn" onClick={this.editContact}>
            {this.state.contactButtonText}
          </button>

          <Education educationArr={this.state.educationHistory} />
          <br></br>
          <WorkExp workArr={this.state.workHistory} />
          <br></br>
          <div className="buttonContainer">
            <div>
            <button id="addBtn" onClick={this.addInfo}>
              {this.state.addButtonText}
            </button>
            <button id="editExpBtn" onClick={this.editExp}>
              {this.state.editExpBtnText}
            </button>
            </div>
            <div id="profilePic"></div>
          </div>
        </div>
      );
    }
  }
}
export default App;
