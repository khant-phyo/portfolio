import React, { useState } from "react";
import { DiHtml5, DiCss3Full, DiJsBadge, DiReact, DiPython, 
  DiNpm, DiVisualstudio, DiDatabase, DiGit, DiGithubBadge } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { SiVite } from "react-icons/si";


export default function App() {
  return (
    <>
      <div className="intro-container">
        <h1>Merhaba!<span className="emoji">👋🏻</span></h1>
        <div className="intro-paragraph">
          <h2>I'm <span className='intro-name'>Khant Phyo Aung</span>, a web developer based in Gaziantep, Turkey. I love building beautiful interfaces, web apps, and everything in between.</h2>
        </div>
        <p className="intro-contact">Get in touch -| <a  href="mailto:thirdoctober310@gmail.com" className='intro-email'>thirdoctober310@gmail.com</a></p>
      </div>
      <div className="body-container">
        <div className="background">
          <h3>BACKGROUND</h3>
          <div className="paragraphs">
            <p>I'm from this little country called <span>Myanmar</span>. I came to Turkey to study enginnering about
              5 years ago. I've been taking night calsses from Gaziantep University. In day-time, I teach myself codding. 
              That's how I got into frontend web development.
            </p>
            <p className="new-paragraph">As a web developer, I enjoy bridging the gap between engineering and design - 
              combining my technical knowledge with my keen eye for design to ccreate beautiful product. 
              My goal is to always build applications that are scalable and efficient under the hood while providing
              engaging, pixel-perfect user experiences.
            </p>
          </div>
        </div>
        <div className="skills">
          <h3>SKILLS</h3>
          <div className="logos">
            <div  className="icon-container">
              <div className="icon">
                <DiHtml5 />
              </div>
              <p>HTML5</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiCss3Full />
              </div>
              <p>CSS3</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiJsBadge />
              </div>
              <p>JavaScript</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiReact />
              </div>
              <p>React</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiNpm />
              </div>
              <p>npm</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiPython />
              </div>
              <p>Python</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiVisualstudio />
              </div>
              <p>Vs Code</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiDatabase />
              </div>
              <p>SQL</p>
            </div> 
              
            <div className="icon-container">
              <div className="icon">
                <DiGit />
              </div>
              <p>Git</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <DiGithubBadge />
              </div>
              <p>Github</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <AiFillApi />
              </div>
              <p>RESTful APIs</p>
            </div>

            <div className="icon-container">
              <div className="icon">
                <SiVite />
              </div>
              <p>Vite</p>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3>PROJECTS</h3>
          <div className="projects">
            <div className="project">
              <p className="title">Flixer Movies Search App 
              <a className='project-link' href="https://flixer-movies.netlify.app" target='_blank'>Live Demo</a> 
              <a className='project-link' href="https://github.com/khant-phyo/flixer-movie" target='_blank'>Github</a></p>
              <p>A full stack app to get information on movies and tv-shows. 
                Find the latest trnading movies to binge watch on your weekend!</p>
              <div className="used-software">
                <p className="software">JavaScript</p>
                <p className="software">React</p>
                <p className="software">ReactRouter</p>
                <p className="software">TMDb API</p>
                <p className="software">Styled-Components</p>
              </div>
            </div>

            <div className="project">
              <p className="title">Vanlife 
              <a className='project-link' href="https://vanliferentals.netlify.app" target='_blank'>Live Demo</a> 
              <a className='project-link' href="https://github.com/khant-phyo/VanLifeLatest" target='_blank'>Github</a></p>
              <p>A web app for rental familiy vans. Embrace the freedom of the open road and create cherished 
                memories together with Vanlife rental family vans.</p>
              <div className="used-software">
                <p className="software">JavaScript</p>
                <p className="software">React</p>
                <p className="software">ReactRouter</p>
                <p className="software">MarageJS</p>
                <p className="software">Styled-Components</p>
              </div>
            </div>

            <div className="project">
              <p className="title">Notes For me 
              <a className='project-link' href="https://notes-for-mes.netlify.app/" target='_blank'>Live Demo</a> 
              <a className='project-link' href="https://github.com/khant-phyo/Notes-for-me" target='_blank'>Github</a></p>
              <p>An intuitive web app, your digital companion, for seamless note-taking. Organize your thoughts, 
                ideas, and tasks effortlessly.</p>
              <div className="used-software">
                <p className="software">JavaScript</p>
                <p className="software">React</p>
                <p className="software">ReactRouter</p>
                <p className="software">Local Storage</p>
                <p className="software">Styled-Components</p>
              </div>
            </div>

            <div className="project">
              <p className="title">Tenzies 
              <a className='project-link' href="https://tenzygame.netlify.app" target='_blank'>Live Demo</a> 
              <a className='project-link' href="https://github.com/khant-phyo/tenzies" target='_blank'>Github</a></p>
              <p>A game u can play alone or with your friends. A perfect choice for quick and entertaining gaming sessions.</p>
              <div className="used-software">
                <p className="software">JavaScript</p>
                <p className="software">React</p>
                <p className="software">ReactRouter</p>
                <p className="software">Styled-Components</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="footr">
        <div className="credict">
          <p>Created by </p>
          <p>Khant Phyo Aung 🤟 2023</p>
        </div>
        <div className="links">
          <a href="mailto:thirdoctober310@gmail.com">Email</a>
          <a href="https://github.com/khant-phyo" target='_blank'>Github</a>
          <a href="www.linkedin.com/in/khantphyoaung7bb257259/" target='_blank'>LinkedIn</a>  
        </div>
      </div>
    </>
  )
}