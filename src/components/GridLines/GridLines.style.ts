import styled from "styled-components"

import { token } from "../../utils/tokens"
import { mediaMin } from "../../utils/mixins/mixMediaQuery"

interface IProps {}

const GridLines = styled.div<IProps>`
  width: 100%;
  max-width: 90%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: grid;
  grid-template-columns: 50%;
  border-left: 1px solid ${token.color.neutral.TINT_80};
  border-right: 1px solid ${token.color.neutral.TINT_80};
  z-index: -1;

  ${mediaMin.S} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${mediaMin.M} {
    max-width: 66.6666667%;
  }

  span {
    height: 100vh;
    border-right: 1px solid ${token.color.neutral.TINT_80};

    &:last-child {
      border: none;
    }
  }
`

export const Styled = {
  GridLines,
}
