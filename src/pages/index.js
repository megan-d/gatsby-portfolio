import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from '../components/projectCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3 style={{textAlign: 'center'}}>Projects</h3>
    <ProjectCard title={'Dash'}/>
    <ProjectCard title={'Televize'}/>
    <ProjectCard title={'Fit Ally'}/>
    <ProjectCard title={'Portfolio'}/>
  </Layout>
)

export default IndexPage
