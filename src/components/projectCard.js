import React from "react"
import Img from "gatsby-image"
// import { makeStyles } from "@material-ui/core/styles"
// import Card from "@material-ui/core/Card"
// import CardActions from "@material-ui/core/CardActions"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
// import Button from "@material-ui/core/Button"
// import Typography from "@material-ui/core/Typography"

// const useStyles = makeStyles({
//   root: {
//     width: "65%",
//     margin: "50px auto",
//     height: '90vh',
//   },
// })

const ProjectCard = props => {
  return (
    <div className="card">
      {/* <img src={props.image} alt="project" className='project-image'/> */}
      {props.title === "Dash" ? (
        <Img fluid={props.dash} style={{ width: "90%" }} />
      ) : props.title === "Televize" ? (
        <Img fluid={props.televize} style={{ width: "90%" }} />
      ) : props.title === "Fit Ally" ? (
        <Img fluid={props.fitAlly} style={{ width: "90%" }} />
      ) :(
        <Img fluid={props.televize} style={{ width: "90%" }} />
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
