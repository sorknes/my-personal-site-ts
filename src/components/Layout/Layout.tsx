import * as React from "react"

import SEO from "../Seo/Seo"

export interface IProps {
  /** Children */
  children: React.ReactNode
  /** Add SEO title */
  title: string
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <SEO title={title} />

      {children}
    </React.Fragment>
  )
}

Layout.defaultProps = {}

export default Layout
