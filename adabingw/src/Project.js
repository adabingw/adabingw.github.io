import React from 'react';
import App from './App';

function Project(props) {
    let header = props.header; 
    let desc = props.desc; 
    let tools = props.tools; 
    let git = props.git;
    let img = props.img;

    return (
        <div className="project">
        <a href={git}>
            <div className="project_header">{header}</div>
            <div className="project_desc">{desc}</div>
            <div className="project_tools">
                {tools.map((tool, index) => {
                    return <div className="project_tool">{tool}</div>
                })}
            </div>
        </a>
        </div>
    )
}

export default Project;