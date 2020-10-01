import * as React from "react"

import { Styled } from "./GridLines.style"

export interface IProps {}

const GridLines: React.FC<IProps> = () => {
  return (
    <Styled.GridLines animate="visible" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Styled.GridLines>
  )
}

export default GridLines
