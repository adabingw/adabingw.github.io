import './App.css';
import './rain.css';

import { useState, useEffect } from 'react';
import $ from 'jquery';

import Work from './Work';

import Light from './svg/Light.js';
import Dark from './svg/Dark.js';
import Cloudy from './svg/Cloudy.js';
import Rainy from './svg/Rainy.js';

import AW_Resume from './res/ADA_WANG_RESUME.pdf'

function App() {
  const [weather, setWeather] = useState(true);             // rainy: true, cloudy: false
  const [theme, setTheme] = useState(true);              // light: true, dark: false
  const [style, setStyle] = useState('wide')

  const rainquery = () => {
	  $('.rain').empty();

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100 && weather) {
      let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
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

  let width = $(window).width();
  $(window).on('resize', function() {
    if ($(this).width() !== width) {
      width = $(this).width();
      if (width <= 900) setStyle('narrow')
      else setStyle('wide')
    }
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (weather) rainquery();
    else stoprain();

    let width = $(window).width();
    if (width <= 880) setStyle('narrow')
  }, [])

  useEffect(() => {
    if (weather) rainquery();
    else stoprain();
  }, [weather]);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const toggleWeather = () => {
    setWeather(!weather);
  };

  return (
    <div className={`App-${style} ${theme ? 'light' : 'dark'} back-row-toggle splat-toggle`}>
      <div className={`rain front-row`}></div>
      <div className={`rain back-row`}></div>

      <div className="content">
          <div className={`weather img`} onClick={toggleWeather}>
            {weather ? <Rainy theme={theme} /> : <Cloudy theme={theme} />}
          </div>
          <div className={`theme img`} onClick={toggleTheme}>
            {theme ? <Dark /> : <Light />}
          </div>

          <div className={`section-${style}`}>
          <div>
            <div className="header" >
              Ello, Ada here
            </div>
            <div className="desc">
              <ul>
                <li>3rd year Software Engineering student from U of Waterloo</li>
                <li>a big reader, talk to me about any books!</li>
                <li>also an anime watcher and history fan</li>
                <li>currently exploring the world of AI and learning about all things data and AWS related.</li>
                <li>how i stack my pancakes:
                  <span style={{color: "#e3672d", fontWeight: 'bold'}}> Svelte</span>, 
                  <span style={{color: "#2a92b8", fontWeight: 'bold'}}> Python</span>, 
                  <span style={{color: "#b84d2a", fontWeight: 'bold'}}> Rust</span>, 
                  <span style={{color: "#d19a56", fontWeight: 'bold'}}> AWS</span>
                </li>
              </ul>
              <div className="icons">
                <a href="https://github.com/adabingw" className="links">github</a>
                <a href="https://linkedin.com/in/adabingw"  className="links">linkedin</a>
                <a href="mailto:abwang@uwaterloo.ca" className="links">email</a>
                <a href={AW_Resume} target = "_blank" className="links" rel="noreferrer">resume</a>
              </div>
            </div>
          </div>
          </div>

          <div className={`section-${style}`}>
            <div className={`section-left-${style}`}>
              <div className="header">
                <span className="head">Chapter 1. </span>Experience
              </div>
              <div className={`experiences-${style}`}>
                <div className="experience">
                  <span>???</span><span>2025 Summer</span>
                </div>
                <div className="experience">
                  <span>Kortex</span><span>2025 Winter</span>
                </div>
                <div className="experience">
                  <span>Texada</span><span>2024 Summer</span>
                </div>
                <div className="experience">
                  <span>SnapPea</span><span>2023 Fall</span>
                </div>
                <div className="experience">
                  <span>McAfee</span><span>2023 Winter</span>
                </div>
                <div className="experience">
                  <span>Makesens</span><span>2022 Summer</span>
                </div>
              </div>
            </div>
            <div>
              <div className="work_div">
                <Work 
                  header="Kortex" 
                  position="Software Engineering intern"
                  desc={`Helping create the second brain to capture and remember.`}
                  url="https://www.kortex.co/"
                />
                <Work 
                  header="Texada Software" 
                  position="Core developer intern"
                  desc={`Terraforming Auth0 system and creating a pipeline for custom slack messages to be 
                    delivered after codebuild results. Managed APIGateway and DynamoDB and Lambda infrastructure. `}
                  url="https://texadasoftware.com/"
                />
                <Work 
                  header="SnapPea" 
                  position="Software Engineer intern"
                  desc={`Creating prototypes and architecting solutions for gas sensors and real-time gas detection. `}
                  url="https://snappeadesign.com/"
                />
                <Work 
                  header="McAfee" 
                  position="Fullstack developer intern"
                  desc={`Data analysis with Databricks and Apache. Also created guidelines of module mocking to unify everyone
                    on the basis of software testing.`}
                  url="https://www.mcafee.com/en-ca/index.html"
                />
                <Work 
                  header="Makesens" 
                  position="Software developer intern"
                  desc={
                    `Developing IoT products to analyze torsion stress on rotary axles and 
                      simulation framework for hydrogen pipeline monitoring.`
                  }
                  url="http://makesens.ca/"
                />
                <Work 
                  header="UCalgary & Youreka" 
                  position="Cancer research student"
                  desc={
                    `Created Kaplan Meier graphs and used Log Sum Rank tests to study effects of mRNA 
                    expressions on survivalships and identify prognostic biomarkers.`
                  }
                  url="http://makesens.ca/"
                />
              </div>
            </div>
          </div>

          <div className={`section-${style}`}>
            <div className={`section-left-${style} projects`}>
              <div className="header">
                <span className="head">Chapter 2. </span>Projects
              </div>
              <a href="https://github.com/adabingw">
                  <div className="center">Find more at my Github!</div>
              </a>
            </div>
            <div>
              <div className="work_div">
                <Work 
                  header="iago" 
                  desc={'Game bot for turn-based games implementing the Alphazero algorithm.'}
                  url="https://iago-adabingw.netlify.app/othello"
                />
                <Work 
                  header="graku" 
                  desc={`Grade calculator and management system written with Svelte, DynamoDB, and GraphQL.`}
                  url="https://github.com/adabingw/graku/"
                />
                <Work 
                  header="leekcake" 
                  desc={`Directly commit leetcode submittions to your github repo (chrome extension!)`}
                  url="https://github.com/adabingw/leekcake"
                />
                <Work 
                  header="iiwii" 
                  desc={`Middle class text editor (like Notion??)`}
                  url="https://github.com/adabingw/iiwii"
                />
                <Work 
                  header="lyrr" 
                  desc={`Genereate lyrics from your favourite artists (inspired by Taylor Swift lol).`}
                  url="https://github.com/adabingw/lyrr"
                />
                <Work 
                  header="writrr" 
                  desc={`Generate realistic handwriting from your own handwriting`}
                  url="https://github.com/adabingw/writrr"
                />
                <Work 
                  header="convrr" 
                  desc={`Unit converter made for my dad: an engineer who deals with complicated things`}
                  url="https://main--famous-smakager-e6e253.netlify.app/"
                />
              </div>
            </div>
          </div>

          <div className={`section-${style} last`}>
            <div className={`section-left-${style}`}>
              <div className="header">
                <span className="head">Chapter 3. </span>Me!
              </div>
              <div className="center">Here lies my hobbies, of which I surprisingly do have some...</div>
            </div>
            <div>
              <div className="work_div">
                <Work 
                  header="Reading" 
                  desc={`
                    Harvester of emotions...I like diving headfirst into books dealing with the human condition 
                    and small bits of fantasy (optional). Historical fiction are gems to me, so are characters. Think:
                    The Lies of Locke Lamora, Demon Copperhead, The Kingdoms. I will read anything you recommend though,
                    even genres I don't like (because I believe in meaningful conversations).
                  `}
                />
                <Work 
                  header="Anime-ing (and Manga)" 
                  desc={`
                    I like dumb fun and epic sagas. Sometimes throw in a romance or a scifi that scratches my itch 
                    like nothing else. Tops: Vinland Saga, Nichijou, Gintama, Hyouka, Kimi ni Todoke, Psycho Pass.
                  `}
                />
                <Work 
                  header="Painting" 
                  desc={`Probably my longest hobby that I actually used to take classes for (???). Of all the mediums
                    I played with, nothing speaks to me the most like oil painting. But...oil paint is messay and expensive, 
                    so now I resort to acrylics to soothe my mind during tough times in school.
                    Follow the link to see what I've created :D`}
                  url="https://photos.app.goo.gl/yiB8QNRMGYo93VcJA"
                />
                {/* <Work 
                  header="Sport-ing (and grass touching)" 
                  desc={`
                    I snowboard and go vroom vroom :) oh and I also play badminton.
                  `}
                /> */}
                <Work 
                  header="Fridge magnets" 
                  position=""
                  desc={`I've started collecting fridge magnets of cities I visit so that, in the future, I 
                    could look at a magnet and tell a story...`}
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
