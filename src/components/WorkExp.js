import React, { Component } from "react";
import App from "../App";

class WorkExp extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="employmentHistory">
                <div id="workHeader">Experience</div>
                {this.props.workArr.map((work) =>{
                    return(
                        <div key={work.id} className="workDescription">
                            <p className="yearsEmployed">{work.dateOfEmployment}</p>
                            <p className="companyName">{work.company}</p>
                            <p className="jobTitle">{work.title}</p>
                            <p className="jobTasks">{work.task.description}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default WorkExp;