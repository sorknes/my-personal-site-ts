import * as React from "react"

import { Styled } from "./Header.style"

export interface IProps {
  /** Children */
  children: React.ReactNode
}

const Header: React.FC<IProps> = ({ children }) => {
  return <Styled.Header animate="visible">{children}</Styled.Header>
}

export default Header
