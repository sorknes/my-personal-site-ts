import styled, { css } from "styled-components"

import { token } from "../../utils/tokens"

interface IProps {}

const CommonStyle = css`
  position: fixed;
  border-radius: ${token.border.radius[6]};
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: all ${token.transition.duration[3]} ${token.transition.timing[3]};
  transition-property: transform, width, height;
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
    transform: translate(-50%, -50%) scale(1.5);
  }

  &.cursor--clicked {
    width: 8px;
    height: 8px;
    border-color: ${token.color.neutral.TINT_100};
    transform: translate(-50%, -50%);
    transition-property: width, height;
  }
`

const TrailingCursor = styled.div<IProps>`
  width: 8px;
  height: 8px;
  background-color: ${token.color.orange.TINT_50};

  ${CommonStyle};

  &.cursor--hidden {
    opacity: 0;
  }

  &.cursor--link-hovered {
    transform: translate(-50%, -50%) scale(1.5);
  }

  &.cursor--clicked {
    transform: translate(-50%, -50%) scale(4);
  }
`

export const Styled = {
  Cursor,
  TrailingCursor,
}
