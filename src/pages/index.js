import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"
import "../components/index.css"

const projects = [
  {
    title: "Dash",
    description:
      "Issue tracking, project management, and coding collaboration application",
    tech:
      "React, Context API, Node.js, Express, MongoDB, JWT, Material UI, Styled Components",
  },
  {
    title: "Televize",
    description:
      "Application for browsing television shows and viewing similar show recommendations",
    tech:
      "React, JWT, Node.js, Express, React-Bootstrap, Styled Components, TMDb API",
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
          key={index}
        />
      )
    })}
  </Layout>
)

export default IndexPage
