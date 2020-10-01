import * as React from "react"

import { Styled } from "./Nav.style"

export interface IProps {}

const Nav: React.FC<IProps> = () => {
  return (
    <Styled.Nav animate="visible">
      <Styled.NavButton>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Styled.NavButton>
    </Styled.Nav>
  )
}

export default Nav
