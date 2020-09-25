import * as React from "react"

import SEO from "../Seo/Seo"

import { Styled } from "./Layout.style"
import GlobalStyle from "../../utils/style/GlobalStyle"
import GridLines from "../GridLines/GridLines"
import Cursor from "../Cursor/Cursor"

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

      <GridLines>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </GridLines>

      {children}

      <Cursor />
    </Styled.Layout>
  )
}

export default Layout
