import './App.css';
import './rain.css';

import { useState, useEffect } from 'react';
import $ from 'jquery';

import Project from './Project';
import Work from './Work';

import Email from './img/email.jpg';
import Github from './img/github.jpg';
import Linkedin from './img/linkedin.jpg';
import Resume from './img/resume.jpg';

import Moon from './img/moon.png'; 
import Rain from './img/rain.png'; 
import Sun from './img/sun.jpg'; 
import Sunny from './img/sunny.png';

import AW_Resume from './res/ADA_WANG_RESUME.pdf'

function App() {
  const [weather, setWeather] = useState(true) 
  const [icon, setIcon] = useState(Sunny)
  const [theme, setTheme] = useState('dark')
  const [tIcon, setTIcon] = useState(Sun)

  const rainquery = () => {
	  $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100 && weather) {
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      increment += randoFiver;
      drops += '<div class="drop" style="color: #1F51FF; left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }

  const stoprain = () => {
    $('.rain').empty();
    $('.rain.front-row').empty();
    $('.rain.back-row').empty();
  }

  useEffect(() => {
    document.body.className = theme;
    if (theme == 'dark') setTIcon(Sun);
    else if (theme == 'light') setTIcon(Moon);
  }, [theme]);

  useEffect(() => {
    if (weather) {
      rainquery();
    } else {
      stoprain();
    }
  }, [])

  useEffect(() => {
    if (weather == true) {
      setIcon(Sunny);
      rainquery();
    }
    else if (weather == false) {
      setIcon(Rain);
      stoprain();
    };
  }, [weather]);

  const toggleTheme = () => {
    if (theme == 'dark') setTheme('light'); 
    else if (theme == 'light') setTheme('dark');
  };

  const toggleWeather = () => {
    if (weather) setWeather(false);
    else if (!weather) setWeather(true);
  };

  return (
    <div className={`App ${theme} back-row-toggle splat-toggle`}>
      <div className={`rain front-row`}></div>
      <div className={`rain back-row`}></div>

      <div className="content">
          <div className={`weather`}>
            <img src={icon} className={`img ${theme}`} alt="theme" onClick={() => toggleWeather()}/>
          </div>
          <div className={`theme`} >
            <img src={tIcon} className={`img ${theme}`} alt="theme" onClick={() => toggleTheme()} />
          </div>
          <div className="header">
            Ello, Ada here
          </div>
          <div className="desc">
            2nd year UWaterloo Software Engineering student. <br />
            I like building end-to-end products to solve problems in my daily lives. <br/>

            I'm currently exploring the world of AI and all things data. <br />

            In my spare time I love reading, learning history, and watching anime. <br /> <br />

            <div className="icons">
              <a href="https://github.com/adabingw"><img src={Github} alt="github" className={`img ${theme}`}/></a>
              <a href="https://linkedin.com/in/adabingw"><img src={Linkedin} alt="linkedin" className={`img ${theme}`}/></a>
              <a href="mailto:abwang@uwaterloo.ca"><img src={Email} alt="email" className={`img ${theme}`} /></a>
              <a href={AW_Resume} target = "_blank"><img src={Resume} alt="resume" className={`img ${theme}`} /></a>
            </div>
          </div>
          <div className="header">
            Work
          </div>
          <div>
            <div className="work_div">
              <Work 
                header="McAfee LLC" 
                position="Fullstack developer intern"
                date="January 2023 - April 2023" 
                desc={[
                  `Conducted data analysis Databricks extension Mosaic.`,
                  `Scripted comprehensive React and Redux unit tests for McAfee Windows Protection.`,
                  `Redesigned module mocking and testing mechanisms to enable more thorough and accurate testing of
                      React hooks, dynamic API calls, and telemetry data.`,
                  `Modularized React components and async calls to reducing code duplication.`
                ]}
                tools={['Databricks', 'React', 'SQL', 'Jest']}
                url="https://www.mcafee.com/en-ca/index.html"
              />

              <Work 
                header="Makesens" 
                position="Software developer"
                date="May 2022 - August 2022" 
                desc={[
                  `Developed an Android app using Java to record and display real-time IoT sensor data 
                      transmitted through Bluetooth Low Energy (BLE).`,
                  `Improved data transfer by optimizing Bluetooth observer listening`,
                  `Develop an integrated simulation framework for pipeline monitoring, stress 
                      analysis, and leak detection using React and AWS Amplify.`
                ]}
                tools={['React', 'Android Studio', 'AWS Amplify', 'Java']}
                url="http://makesens.ca/"
              />
            </div>
          </div>
          <div className="header">
            Projects
          </div>
          <div className="project_col">
            <div className="project_div">
              <Project 
                header="Convrr"
                desc="Unit and currency conversion desktop application."
                tools={['React', 'Electron', 'RestAPI']}
                git="https://github.com/adabingw/convrr"
              />

              <Project 
                header="Lyrr"
                desc="AI generate lyrics from artist composition style."
                tools={['GPT2', 'Hugging face', 'Pytorch', 'React', 'Flask']}
                git="https://github.com/adabingw/lyrr"
              />

              <Project 
                header="Iago"
                desc="Game bot for turn-based games implementing the Alphazero algorithm."
                tools={['Tensorflow', 'Python', 'React', 'Flask']}
                git=""
              />
            </div>

            <div className="project_div">
              <Project 
                header="Gradolatrr"
                desc="Grade calculator and management system."
                tools={['PostgreSQL', 'Electron', 'Express', 'React', 'Node']}
                git="https://github.com/adabingw/gradolatrr"
              />

              <Project 
                header="Writrr"
                desc="Generate realistic writing from your own handwriting."
                tools={['OpenCV', 'Tensorflow', 'React', 'Flask', 'Python']}
                git="https://github.com/adabingw/writrr"
              />

              <Project 
                header="Playground"
                desc="Various ML topics I've played around with"
                tools={['Python', 'Tensorflow', 'Pytorch']}
                git="https://github.com/adabingw/playground"
              />
            </div>
            <div className="center">Find more at my Github!</div>
          </div>
      </div>
    </div>
  );
}

export default App;
