import * as React from "react"

import { Styled } from "./GridLines.style"

export interface IProps {
  /** Children */
  children: React.ReactNode
}

const GridLines: React.FC<IProps> = ({ children }) => {
  return <Styled.GridLines aria-hidden="true">{children}</Styled.GridLines>
}

export default GridLines
