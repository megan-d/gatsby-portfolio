import React from "react";
import logo from "../images/logo2.svg";
import github from '../images/GitHub-Mark-Light-64px.png';

const Hero = props => (
  <div
    style={{
      margin: `0`,
      padding: "0",
      width: "100vw",
      height: '90vh',
      backgroundColor: "orange",
      overflow: 'scroll'
    }}
  >
    <img src={logo} alt="logo" className='logo' />
    <div className="hero-text">
      <h1>Hi, I'm Megan.</h1>
      <h3>I build full-stack and front-end web applications.</h3>
      <div className='hero-subtitle'>
      <p>
        Check out my recent projects below and my GitHub profile{" "}
        <a href="https://www.github.com/megan-d" className='anchor' target="_blank"
          rel="noopener noreferrer">here.</a> 
      </p>
      <img src={github} alt='github-logo' className='github-logo'/>
      </div>
      
    </div>
  </div>
)

export default Hero
