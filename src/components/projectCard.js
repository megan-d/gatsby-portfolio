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
    margin: "50px auto",
  },
  media: {
    height: 400,
  },
})

export default function ProjectCard(props) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Dash"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className='card-text'
        >
          {props.title}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          className='card-text card-description'
        >
          {props.description}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          className='card-text card-technologies'
        >
          Technologies: {props.tech}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          className='card-text card-button'
          variant='contained'
        >
          Live Application
        </Button>
        <Button
          size="medium"
          className='card-text card-button'
          variant='contained'
        >
          Code
        </Button>
      </CardActions>
    </Card>
  )
}
