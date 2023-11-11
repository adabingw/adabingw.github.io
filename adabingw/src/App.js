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

import Moon from './img/moon.jpg'; 
import Rain from './img/rain.png'; 
import Sun from './img/sun.jpg'; 
import Sunny from './img/sunny.png';

import AW_Resume from './res/ADA_WANG_RESUME.pdf'

function App() {
  const [weather, setWeather] = useState(true) 
  const [icon, setIcon] = useState(Sunny)
  const [theme, setTheme] = useState('light')
  const [tIcon, setTIcon] = useState(Moon)
  const [style, setStyle] = useState('wide')

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

    console.log("INCREMENTS")
    console.log(drops)

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }

  const stoprain = () => {
    $('.rain').empty();
    $('.rain.front-row').empty();
    $('.rain.back-row').empty();
  }

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

    var width = $(window).width();
    if (width <= 880) {
      setStyle('narrow')
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
    <div className={`App-${style} ${theme} back-row-toggle splat-toggle`}>
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
            <ul>
              <li>3rd year UWaterloo Software Engineering student.</li>
              <li>I'm a big reader, talk to me about any books!</li>
              <li>Also an anime watcher and history fan</li>
              <li>I'm currently exploring the world of AI and learning about all things data and AWS related.</li>
              <li>My weapons of choice are:
                <span style={{color: "#e3672d", fontWeight: 'bold'}}> Svelte</span>, 
                <span style={{color: "#2a92b8", fontWeight: 'bold'}}> Python</span>, 
                <span style={{color: "#b84d2a", fontWeight: 'bold'}}> Rust</span>, 
                <span style={{color: "#d19a56", fontWeight: 'bold'}}> AWS</span>, 
              </li>
            </ul>
            <div className="icons">
              <a href="https://github.com/adabingw"><img src={Github} alt="github" className={`img ${theme}`}/></a>
              <a href="https://linkedin.com/in/adabingw"><img src={Linkedin} alt="linkedin" className={`img ${theme}`}/></a>
              <a href="mailto:abwang@uwaterloo.ca"><img src={Email} alt="email" className={`img ${theme}`} /></a>
              <a href={AW_Resume} target = "_blank"><img src={Resume} alt="resume" className={`img ${theme}`} /></a>
            </div>
          </div>
          <div className="header">
            Experience
          </div>
          <div>
            <div className="work_div">
              <Work 
                header="SnapPea Design" 
                position="Software Engineer intern"
                desc={[
                  `Automated product imports, orders, and fulfillment for Shopify`,
                  `Developing IoT products that uses MVVM architecture patterns and integrates BME688 AI Gas Sensors with BLE`
                ]}
                tools={['Firebase', 'Heroku', 'Kotlin', 'C++']}
                url="https://snappeadesign.com/"
              />
              <Work 
                header="McAfee" 
                position="Fullstack developer intern"
                desc={[
                  `Data analysis using Databricks extension Mosaic.`,
                  `Module mocking and testing mechanisms to enable more thorough and accurate testing of
                      React hooks, dynamic API calls, and telemetry data.`,
                ]}
                tools={['PySpark', 'React', 'SQL']}
                url="https://www.mcafee.com/en-ca/index.html"
              />

              <Work 
                header="Makesens" 
                position="Software developer intern"
                desc={[
                  `Developed IoT products to analyze torsion stress on rotary axles.`,
                  `Created an integrated fullstack simulation framework for hydrogen pipeline monitoring, stress analysis, and leak detection.`
                ]}
                tools={['React', 'AWS Amplify', 'Java']}
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
                header="iago"
                desc="Game bot for turn-based games implementing the Alphazero algorithm."
                tools={['Tensorflow', 'Python', 'React', 'Flask']}
                git=""
                link="https://iago-adabingw.netlify.app/othello"
                theme={theme}
              />

              <Project 
                header="gradolatrr"
                desc="Grade calculator and management system."
                tools={['DynamoDB', 'AppSync', 'GraphQL', 'Svelte']}
                git="https://github.com/adabingw/gradolatrr"
                link="https://main--transcendent-marigold-f5980e.netlify.app/"
                theme={theme}
              />

              <Project 
                header="lyrr"
                desc="AI generate lyrics from artist composition style."
                tools={['GPT2', 'Huggingface', 'Pytorch', 'Lambda', 'API Gateway', 'Docker', 'ECR', 'AWS CDK']}
                git="https://github.com/adabingw/lyrr"
                link="https://effervescent-cassata-80a49a.netlify.app/"
                theme={theme}
              />

            </div>

            <div className="project_div">
              <Project 
                header="convrr"
                desc="Unit and currency conversion desktop application."
                tools={['React', 'Electron', 'RestAPI']}
                git="https://github.com/adabingw/convrr"
                link="https://main--famous-smakager-e6e253.netlify.app/"
                theme={theme}
              />

              <Project 
                header="writrr"
                desc="Generate realistic writing from your own handwriting."
                tools={['OpenCV', 'Tensorflow', 'React', 'Flask', 'Python']}
                git="https://github.com/adabingw/writrr"
                link=""
                theme={theme}
              />

              <Project 
                header="raytracrr"
                desc="Raytracer that creates worlds within worlds"
                tools={['Rust']}
                git="https://github.com/adabingw/raytracrr"
                link=""
                theme={theme}
              />
            </div>
            <a href="https://github.com/adabingw">
                <div className="center">Find more at my Github!</div>
            </a>
          </div>
      </div>
    </div>
  );
}

export default App;
