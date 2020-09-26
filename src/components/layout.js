import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {

  return (
    <div
      style={{
        margin: `0 auto`,
        width: "100vw",
      }}
    >
      
      <div className="content-container">
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" style={{color: '#333333'}}>Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
