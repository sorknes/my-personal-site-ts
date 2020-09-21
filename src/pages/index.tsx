import * as React from "react"

import Layout from "../components/Layout/Layout"

import { token } from "../utils/tokens/index"

import { Styled } from "./index.style"

export interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <Layout title="Home">
      <Styled.IndexContent>Hello world, black!</Styled.IndexContent>
      <div
        style={{
          padding: token.space.component[2],
          marginBottom: token.space.layout[6],
          color: token.color.neutral.TINT_100,
          borderRadius: token.border.radius[2],
          backgroundColor: token.color.orange.TINT_50,
        }}>
        Hello world, orange!
      </div>
      <div
        style={{
          padding: token.space.component[2],
          color: token.color.neutral.TINT_100,
          borderRadius: token.border.radius[2],
          backgroundColor: token.color.blue.TINT_50,
        }}>
        Hello world, blue!
      </div>
    </Layout>
  )
}

Home.defaultProps = {}

export default Home
