import * as React from "react"

import { Styled } from "./Nav.style"

export interface IProps {
  /** Framer motion animate */
  animate?: any
}

const Nav: React.FC<IProps> = ({ animate }) => {
  return (
    <Styled.Nav animate={animate}>
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
