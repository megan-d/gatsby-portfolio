import React from "react"
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

export default function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="project" className='project-image'/>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <p>Technologies: {props.tech}</p>
        <a className='card-button' href={props.appUrl} target="_blank" rel="noopener noreferrer">
          Live Application
        </a>
        <a className='card-button' href={props.codeUrl} target="_blank" rel="noopener noreferrer">
          Code
        </a>
      </div>
    </div>
  )
}
