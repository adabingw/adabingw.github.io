import React from 'react';
import $ from 'jquery';
import { useState, useEffect } from 'react';


function Work(props) {
    let header = props.header; 
    let desc = props.desc; 
    let tools = props.tools; 
    let date = props.date;
    let url = props.url;
    let position = props.position;

    const [style, setStyle] = useState('wide')

    var width = $(window).width();
    $(window).on('resize', function() {
      if ($(this).width() !== width) {
        width = $(this).width();
        if (width <= 880) {
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