import React from "react"
import Hero from '../components/hero';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from '../components/projectCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <h3 style={{textAlign: 'center', margin: '0', padding: '0'}}>Projects</h3>
    <ProjectCard title={'Dash'}/>
    <ProjectCard title={'Televize'}/>
    <ProjectCard title={'Fit Ally'}/>
    <ProjectCard title={'Portfolio'}/>
  </Layout>
)

export default IndexPage
