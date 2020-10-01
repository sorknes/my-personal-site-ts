import * as React from "react"

import SEO from "../Seo/Seo"

import { Styled } from "./Layout.style"
import GlobalStyle from "../../utils/style/GlobalStyle"
import GridLines from "../GridLines/GridLines"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Cursor from "../Cursor/Cursor"

export interface IProps {
  /** Children */
  children: React.ReactNode
  /** Add SEO title */
  title: string
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, [])

  return (
    <React.Fragment>
      <Styled.Layout>
        <SEO title={title} />

        <GlobalStyle />

        {isLoaded ? (
          <React.Fragment>
            <GridLines />

            <Header>
              <div>logo</div>
            </Header>

            <Nav />

            {children}

            <Cursor />
          </React.Fragment>
        ) : (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}>
            loading...
          </div>
        )}
      </Styled.Layout>
    </React.Fragment>
  )
}

export default Layout
