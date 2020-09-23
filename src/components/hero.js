import React from "react"
import logo from "../images/logo.svg"

const Hero = props => (
  <div
    style={{
      margin: `0`,
      padding: "0",
      width: "100vw",
      backgroundColor: "orange",
    }}
  >
    <img src={logo} alt="logo" style={{ height: "60px" }} />
    <div className="hero-text">
      <p>Hi, I'm Megan</p>
      <p>I build full-stack and front-end web applications</p>
      <p style={{margin: '0'}}>
        You can check out my recent projects below and my github profile{" "}
        <a href="https://www.github.com/megan-d">here</a>
      </p>
    </div>
  </div>
)

export default Hero
