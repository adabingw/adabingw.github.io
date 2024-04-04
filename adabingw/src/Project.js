import React from 'react';
import App from './App';

import $ from 'jquery';
import { useState, useEffect } from 'react';

import Link from "./img/link.jpg";
import Github from './img/github.jpg';

function Project(props) {
    let header = props.header; 
    let desc = props.desc; 
    let tools = props.tools; 
    let git = props.git;
    let link = props.link; 
    let theme = props.theme;

    const [style, setStyle] = useState('wide')

    var width = $(window).width();
    $(window).on('resize', function() {
      if ($(this).width() !== width) {
        width = $(this).width();
        if (width <= 900) {
          setStyle('narrow')
        } else {
          setStyle('wide')
        }
      }
    });

    useEffect(() => {
        var width = $(window).width();
        if (width <= 880) {
            setStyle('narrow')
        }
    }, [])

    return (
        <div className={`work-${style}`}>
            <div className="project_icons">
              <div className="project_header">{header}</div>
              <div>
                {git != "" && <a href={git}><img src={Github} alt="github" className={`project_img ${theme}`}/></a>}
                {link != "" && <a href={link}><img src={Link} alt="link" className={`project_img ${theme}`}/></a>}
              </div>
            </div>
            <div className="work_desc">{desc}</div>
            <div className="project_tools">
                {tools.map((tool, index) => {
                    return <div className="project_tool">{tool}</div>
                })}
            </div>
        </div>
    )
}

export default Project;
