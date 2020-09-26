import React from "react"
import Img from "gatsby-image"


const ProjectCard = props => {
  return (
    <div className="card">
      {/* <img src={props.image} alt="project" className='project-image'/> */}
      {props.title === "Dash" ? (
        <Img fluid={props.dash} style={{ width: "90%", boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)' }} />
      ) : props.title === "Televize" ? (
        <Img fluid={props.televize} style={{ width: "90%", boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)' }} />
      ) : props.title === "Fit Ally" ? (
        <Img fluid={props.fitAlly} style={{ width: "90%", boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)' }} />
      ) :(
        <Img fluid={props.portfolio} style={{ width: "90%", boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)' }} />
      )}

      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <p>Technologies: {props.tech}</p>
        <a
          className="card-button"
          href={props.appUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Application
        </a>
        <a
          className="card-button"
          href={props.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
