import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, titleLeft, titleRight, linkLeft, linkRight, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{titleLeft}</Link>
      </h1>
    )
  } else {
    header = (
      <div class="header-link-home-wrapper">
      <Link className="header-link-home" to={linkLeft}>
        {titleLeft}
      </Link>
      <Link className="header-link-home" to={linkRight}>
        {titleRight}
      </Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
