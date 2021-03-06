import React from "react"
import "../components/index.css"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import { graphql } from "gatsby"

const projects = [
  {
    title: "Dash",
    description:
      "Full-stack issue tracking, project management, and coding collaboration application",
    tech:
      "React, Context API, Node.js, Express, MongoDB, JWT, Material-UI, Styled Components, Chart.js",
    applicationUrl: "https://dash-tracker.herokuapp.com",
    codeUrl: "https://github.com/megan-d/Dash",
    image: "dash",
  },
  {
    title: "Fit Ally",
    description:
      "Full-stack fitness application that provides a visual representation of fitness stats and activities",
    tech: "React, Redux, Node.js, Express, PostgreSQL, JWT, SCSS, Chart.js",
    applicationUrl: "https://fit-ally.herokuapp.com",
    codeUrl: "https://github.com/megan-d/Fit-Ally",
    image: "fit-ally",
  },
  {
    title: "Televize",
    description:
      "Application for browsing television shows and viewing show recommendations",
    tech:
      "React, Node.js, Express, React-Bootstrap, Styled Components, TMDb API",
    applicationUrl: "https://televize.herokuapp.com",
    codeUrl: "https://github.com/megan-d/Televize",
    image: "televize",
  },
  {
    title: "Portfolio",
    description: "Portfolio site to display my recent projects",
    tech: "Gatsby, custom CSS",
    applicationUrl: "https://megan-d.netlify.app",
    codeUrl: "https://github.com/megan-d/gatsby-portfolio",
    image: "portfolio",
  },
]

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <h3 className="project-heading">Projects</h3>
    <hr style={{ width: "50%", color: "#333333" }}></hr>
    {projects.map((el, index) => {
      return (
        <ProjectCard
          title={el.title}
          description={el.description}
          tech={el.tech}
          appUrl={el.applicationUrl}
          codeUrl={el.codeUrl}
          dash={props.data.dash.childImageSharp.fluid}
          televize={props.data.televize.childImageSharp.fluid}
          fitAlly={props.data.fitAlly.childImageSharp.fluid}
          portfolio={props.data.portfolio.childImageSharp.fluid}
          key={index}
        />
      )
    })}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    dash: file(relativePath: { eq: "Dash-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 985, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    televize: file(relativePath: { eq: "Televize-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 985, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fitAlly: file(relativePath: { eq: "Fit-Ally-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 985, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portfolio: file(relativePath: { eq: "Portfolio-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 985, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
