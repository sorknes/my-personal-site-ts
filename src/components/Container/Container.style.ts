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
    props.width === "fluid"
      ? "100%"
      : props.width === "fixed"
      ? token.breakpoint[4]
      : null};
  margin-right: auto;
  margin-bottom: ${token.space.layout[5]};
  margin-left: auto;
  display: grid;
  grid-template-columns: ${props =>
    props.columns === 1
      ? "minmax(0, 1fr)"
      : props.columns === 2
      ? "minmax(0, 1fr)"
      : props.columns === 3
      ? "minmax(0, 1fr)"
      : props.columns === 4
      ? "minmax(0, 1fr)"
      : null};
  grid-gap: ${props => (props.noGap ? 0 : token.space.layout[5])};

  ${mediaMin.S} {
    grid-template-columns: ${props =>
      props.columns === 1
        ? "minmax(0, 1fr)"
        : props.columns === 2
        ? "minmax(0, 1fr) minmax(0, 1fr)"
        : props.columns === 3
        ? "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"
        : props.columns === 4
        ? "minmax(0, 1fr) minmax(0, 1fr)"
        : null};
  }

  ${mediaMin.M} {
    grid-template-columns: ${props =>
      props.columns === 4
        ? "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)"
        : null};
  }
`

export const Styled = {
  Container,
}
