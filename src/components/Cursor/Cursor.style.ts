import styled, { css } from "styled-components"

import { token } from "../../utils/tokens"

interface IProps {}

const CommonStyle = css`
  position: fixed;
  border-radius: ${token.border.radius[6]};
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all ${token.transition.duration[3]} ${token.transition.timing[3]};
  transition-property: transform;
  z-index: ${token.zIndex[6]};
`

const Cursor = styled.div<IProps>`
  width: 40px;
  height: 40px;
  border: 1px solid ${token.color.orange.TINT_50};

  ${CommonStyle};

  &.cursor--hidden {
    opacity: 0;
  }

  &.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.25);
  }

  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(0.9);
  }
`

const TrailingCursor = styled.div<IProps>`
  width: 4px;
  height: 4px;
  background-color: ${token.color.neutral.TINT_50};

  ${CommonStyle};
`

export const Styled = {
  Cursor,
  TrailingCursor,
}
