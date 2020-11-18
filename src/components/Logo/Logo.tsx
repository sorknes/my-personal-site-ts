import * as React from "react"

import { Styled } from "./Logo.style"

export interface IProps {}

const Logo: React.FC<IProps> = () => {
  return (
    <Styled.LogoLink to="/">
      <Styled.Logo>
        <span>K</span>
        <Styled.LogoSpan animate="hiddenSpan">nut</Styled.LogoSpan>
        <span>S</span>
        <Styled.LogoSpan animate="hiddenSpan">orknes</Styled.LogoSpan>
      </Styled.Logo>
    </Styled.LogoLink>
  )
}

export default Logo
