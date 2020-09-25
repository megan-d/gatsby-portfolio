import React from "react"
import "../components/index.css"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import dash from '../images/Dash.png';

const projects = [
  {
    title: "Dash",
    description:
      "Full-stack issue tracking, project management, and coding collaboration application",
    tech:
      "React, Context API, Node.js, Express, MongoDB, JWT, Material UI, Styled Components",
    applicationUrl: "https://dash-tracker.herokuapp.com",
    codeUrl: "https://github.com/megan-d/Dash",
    image: `${dash}`
  },
  {
    title: "Televize",
    description:
      "Application for browsing television shows and viewing similar show recommendations",
    tech:
      "React, JWT, Node.js, Express, React-Bootstrap, Styled Components, TMDb API",
    applicationUrl: "https://televize.herokuapp.com",
    codeUrl: "https://github.com/megan-d/Televize",
    image: `${dash}`
  },
  {
    title: "Fit Ally",
    description:
      "Full-stack fitness application that provides a visual representation of fitness stats and activities",
    tech: "React, Redux, Node.js, Express, MongoDB, JWT, custom Sass/Scss",
    applicationUrl: "https://fit-ally.herokuapp.com",
    codeUrl: "https://github.com/megan-d/Fit-Ally",
    image: `${dash}`
  },
  {
    title: "Portfolio",
    description: "Portfolio site to display my recent projects",
    tech: "Gatsby, custom CSS",
    applicationUrl: "https://megan-d.netlify.app",
    codeUrl: "https://github.com/megan-d/gatsby-portfolio",
    image: `${dash}`
  },
]

const IndexPage = () => (
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
          image={el.image}
          key={index}
        />
      )
    })}
  </Layout>
)

export default IndexPage
