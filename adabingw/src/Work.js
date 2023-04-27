import React from 'react';
import App from './App';

function Work(props) {
    let header = props.header; 
    let desc = props.desc; 
    let tools = props.tools; 
    let date = props.date;
    let url = props.url;
    let position = props.position;

    return (
        <div className="work">
            <a href={url} className="work_url"><div className="work_header">{header}</div></a>
            <div className='work_position'>{position}</div>
            <div className="work_date">{date}</div>
            <div className="work_desc">
                <ul>
                    {desc.map((d, index) => {
                        return <li>{d}</li>
                    })}
                </ul>
            </div>
            <div className="work_tools">
                {tools.map((tool, index) => {
                    return <div className="work_tool">{tool}</div>
                })}
            </div>
        </div>
    )
}

export default Work;