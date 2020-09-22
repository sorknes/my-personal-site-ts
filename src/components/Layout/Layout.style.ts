import styled from "styled-components"

import { token } from "../../utils/tokens"
import { mediaMin } from "../../utils/mixins/mixMediaQuery"

interface IProps {}

const Layout = styled.main<IProps>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: ${token.space.layout[5]};

  ${mediaMin.S} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  ${mediaMin.M} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(
        0,
        1fr
      );
  }
`

Layout.defaultProps = {}

export const Styled = {
  Layout,
}
