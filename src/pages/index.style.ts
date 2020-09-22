import styled from "styled-components"

import { token } from "../utils/tokens"
import { mediaMin } from "../utils/mixins/mixMediaQuery"

interface IProps {}

const IndexContent = styled.div<IProps>`
  padding: ${token.space.component[2]};
  color: ${token.color.neutral.TINT_100};
  border-radius: ${token.border.radius[2]};
  background-color: ${token.color.neutral.TINT_0};

  ${mediaMin.S} {
    background-color: ${token.color.orange.TINT_50};
  }

  ${mediaMin.M} {
    background-color: ${token.color.blue.TINT_50};
  }
`

export const Styled = {
  IndexContent,
}

IndexContent.defaultProps = {}
