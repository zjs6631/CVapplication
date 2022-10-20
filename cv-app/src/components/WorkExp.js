import React, { Component } from "react";
import App from "../App";

class WorkExp extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.workArr.map((work) =>{
                    return(
                        <p key={work.id}>
                            {work.company}
                            <br></br>
                            {work.title}
                            <br></br>
                            {work.task.description}
                            <br></br>
                            {work.dateOfEmployment}
                        </p>
                    );
                })}
            </div>
        );
    }
}

export default WorkExp;