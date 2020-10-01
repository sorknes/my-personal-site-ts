import styled from "styled-components"
import { motion } from "framer-motion"

import { token } from "../../utils/tokens"

interface IProps {}

const variants = {
  hidden: { top: "-60px" },
  visible: {
    top: "99px",
    transition: { delay: 0.25, duration: 0.5, ease: "easeInOut" },
  },
}

const Nav = styled(motion.nav).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  position: fixed;
  right: calc(16.6666667% - 59px);
  z-index: ${token.zIndex[4]};
`

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: none;
  background-color: ${token.color.orange.TINT_50};
  transition: background-color
    ${token.transition.duration[3] + " " + token.transition.timing[3]};

  &::before {
    height: 100%;
    width: 4px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${token.color.orange.TINT_50};
    transition: left
      ${token.transition.duration[3] + " " + token.transition.timing[3]};
    z-index: -1;
  }

  span {
    height: 1px;
    content: "";
    display: block;
    position: relative;
    background-color: ${token.color.neutral.TINT_100};
    transition: all
      ${token.transition.duration[3] + " " + token.transition.timing[3]};

    &:nth-child(1) {
      width: 32px;
    }

    &:nth-child(2) {
      width: 24px;
    }

    &:nth-child(3) {
      width: 16px;
    }

    &:not(:last-child) {
      margin-bottom: ${token.space.component[3]};
    }
  }

  &:hover,
  &:focus {
    background-color: ${token.color.neutral.TINT_10};

    &::before {
      left: -4px;
    }

    span {
      &:nth-child(2),
      &:nth-child(3) {
        width: 32px;
      }

      &:not(:last-child) {
        margin-bottom: ${token.space.component[4]};
      }
    }
  }
`

export const Styled = {
  Nav,
  NavButton,
}
