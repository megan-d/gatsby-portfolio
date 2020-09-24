import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles({
  root: {
    width: "65%",
    maxWidth: '65%',
    margin: "50px auto",
    height: 600,
    maxHeight: 600,
  },
  media: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'top'
  },
})

export default function ProjectCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        componenent='img'
        alt='Project Screenshot'
        image={props.image}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="card-text"
        >
          {props.title}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          className="card-text card-description"
        >
          {props.description}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          className="card-text card-technologies"
        >
          Technologies: {props.tech}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          className="card-text card-button"
          variant="contained"
          href={props.appUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Application
        </Button>
        <Button
          size="medium"
          className="card-text card-button"
          variant="contained"
          href={props.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </Button>
      </CardActions>
    </Card>
  )
}
