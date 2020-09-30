import styled from "styled-components"

import { token } from "../../utils/tokens"

interface IProps {}

const Header = styled.header<IProps>`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr;
  border-bottom: 1px solid ${token.color.neutral.TINT_80};
  background-color: ${token.color.neutral.TINT_100};
  z-index: ${token.zIndex[5]};
`

export const Styled = {
  Header,
}
