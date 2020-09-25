import styled from "styled-components"

import { token } from "../../utils/tokens"

interface IProps {}

const Cursor = styled.div<IProps>`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  pointer-events: none;
  border: 1px solid ${token.color.orange.TINT_50};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-in-out;
  transition-property: opacity, transform;
  z-index: 9999;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 100%;
    transition: all 300ms ease-in-out;
  }

  &::before {
    width: 20px;
    height: 20px;
    background-color: ${token.color.orange.TINT_50};
  }

  &::after {
    width: 8px;
    height: 8px;
    border: 2px solid white;
  }

  &.cursor--hidden {
    opacity: 0;
  }

  &.cursor--link-hovered {
    &::before {
      width: 32px;
      height: 32px;
    }

    &::after {
      width: 0;
      height: 0;
    }
  }

  &.cursor--clicked {
    &::after {
      width: 30px;
      height: 30px;
      background-color: ${token.color.neutral.TINT_100};
    }
  }
`

export const Styled = {
  Cursor,
}
