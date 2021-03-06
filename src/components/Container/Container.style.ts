import styled from "styled-components"

import { token } from "../../utils/tokens"
import { mediaMin } from "../../utils/mixins/mixMediaQuery"

interface IProps {
  /** Column count */
  columns?: 1 | 2 | 3 | 4
  /** Grid gap */
  noGap?: boolean
  /** Container width */
  width?: "fluid" | "fixed"
}

const Container = styled.div<IProps>`
  width: ${props => (props.width === "fluid" ? "100%" : "90%")};
  max-width: ${props =>
    props.width === "fluid" ? "100%" : props.width === "fixed" ? "90%" : null};
  margin-right: auto;
  margin-bottom: ${token.space.layout[5]};
  margin-left: auto;
  display: grid;
  grid-template-columns: ${props =>
    props.columns === 1
      ? "1fr"
      : props.columns === 2
      ? "1fr"
      : props.columns === 3
      ? "1fr"
      : props.columns === 4
      ? "1fr"
      : null};

  ${mediaMin.S} {
    grid-template-columns: ${props =>
      props.columns === 1
        ? "1fr"
        : props.columns === 2
        ? "repeat(2, 1fr)"
        : props.columns === 3
        ? "repeat(2, 1fr)"
        : props.columns === 4
        ? "repeat(2, 1fr)"
        : null};
  }

  ${mediaMin.M} {
    max-width: ${props =>
      props.width === "fluid"
        ? "100%"
        : props.width === "fixed"
        ? "66.6666667%"
        : null};
    grid-template-columns: ${props =>
      props.columns === 3
        ? "repeat(3, 1fr)"
        : props.columns === 4
        ? "repeat(4, 1fr)"
        : null};
  }

  div {
    ${mediaMin.S} {
      &:first-child {
        grid-column: ${props => props.columns === 3 && "span 3"};
      }
    }

    ${mediaMin.M} {
      &:first-child {
        grid-column: ${props => props.columns === 3 && "span 1"};
      }
    }
  }
`

export const Styled = {
  Container,
}
