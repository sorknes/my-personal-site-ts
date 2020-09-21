import * as React from "react"

import Layout from "../components/Layout/Layout"

import { token } from "../utils/tokens/index"

import { Styled } from "./index.style"

export interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <Layout title="Home">
      <Styled.IndexContent>Hello world, 1!</Styled.IndexContent>
      <Styled.IndexContent>Hello world, 2!</Styled.IndexContent>
      <Styled.IndexContent>Hello world, 3!</Styled.IndexContent>
    </Layout>
  )
}

Home.defaultProps = {}

export default Home
