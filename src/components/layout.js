
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Hero from "./hero";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div
        style={{
          margin: `0 auto`,
          width: '100vw',
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
         <Hero />
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`,
          textAlign: 'center'
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
