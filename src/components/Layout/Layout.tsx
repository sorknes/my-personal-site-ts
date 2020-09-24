import * as React from "react"

import SEO from "../Seo/Seo"

import GlobalStyle from "../../utils/style/GlobalStyle"

import { Styled } from "./Layout.style"

export interface IProps {
  /** Children */
  children: React.ReactNode
  /** Add SEO title */
  title: string
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <Styled.Layout>
      <SEO title={title} />

      <GlobalStyle />

      {children}
    </Styled.Layout>
  )
}

Layout.defaultProps = {}

export default Layout
