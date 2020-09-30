import * as React from "react"

import Layout from "../components/Layout/Layout"
import Container from "../components/Container/Container"

import { Styled } from "./index.style"

export interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <Layout title="Home">
      {/* <Container columns={1}>
        <Styled.IndexContent>Hello world, 1 column!</Styled.IndexContent>
      </Container>

      <Container columns={2}>
        <Styled.IndexContent>
          Hello world, 2 column! - <a href="">Link</a>
        </Styled.IndexContent>
        <Styled.IndexContent>
          Hello world, 2 column! - <a href="">Link</a>
        </Styled.IndexContent>
      </Container>

      <Container columns={3}>
        <Styled.IndexContent>Hello world, 3 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 3 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 3 column!</Styled.IndexContent>
      </Container>

      <Container columns={4}>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
      </Container>

      <Container columns={1} width="fluid">
        <Styled.IndexContent>Hello world, 1 column!</Styled.IndexContent>
      </Container>

      <Container columns={2} width="fluid">
        <Styled.IndexContent>Hello world, 2 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 2 column!</Styled.IndexContent>
      </Container>

      <Container columns={3} width="fluid">
        <Styled.IndexContent>Hello world, 3 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 3 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 3 column!</Styled.IndexContent>
      </Container>

      <Container columns={4} width="fluid">
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
        <Styled.IndexContent>Hello world, 4 column!</Styled.IndexContent>
      </Container> */}

      <div style={{ height: "2000px" }} />
    </Layout>
  )
}

Home.defaultProps = {}

export default Home
