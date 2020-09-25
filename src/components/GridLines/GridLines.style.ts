import styled from "styled-components"

import { token } from "../../utils/tokens"
import { mediaMin } from "../../utils/mixins/mixMediaQuery"

interface IProps {}

const GridLines = styled.div<IProps>`
  width: 90%;
  max-width: ${token.breakpoint[4]};
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-left: 1px solid ${token.color.neutral.TINT_80};
  border-right: 1px solid ${token.color.neutral.TINT_80};
  z-index: -1;

  ${mediaMin.S} {
    grid-template-columns: repeat(4, 1fr);
  }

  span {
    &:not(:last-child) {
      border-right: 1px solid ${token.color.neutral.TINT_80};
    }
  }
`

export const Styled = {
  GridLines,
}
