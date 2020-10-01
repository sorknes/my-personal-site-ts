import * as React from "react"

import { Styled } from "./Header.style"

import Logo from "../Logo/Logo"

export interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <Styled.Header animate="visible">
      <Logo />
    </Styled.Header>
  )
}

export default Header
