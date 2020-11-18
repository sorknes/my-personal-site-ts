import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { token } from "../../utils/tokens"

interface IProps {}

const variants = {
  hiddenSpan: {
    width: "0px",
    transition: { delay: 5, duration: 0.3 },
  },
  visibleSpan: {
    width: "auto",
  },
}

const LogoSpan = styled(motion.span).attrs(() => ({
  initial: "visibleSpan",
  variants,
}))`
  transition: width
    ${token.transition.duration[3] + " " + token.transition.timing[3]};

  &:not(:last-child) {
    margin-right: ${token.space.component[2]};
  }
`

const Logo = styled.h1<IProps>`
  font-family: ${token.font.family.SECONDARY};
  font-size: 16px;
  font-weight: normal;
  transition: background-position
    ${token.transition.duration[3] + " " + token.transition.timing[0]};
  transition-delay: ${token.transition.duration[3]};

  span {
    position: relative;
    top: 3px;
    display: inline-block;
    overflow: hidden;
  }
`

const LogoLink = styled(Link)`
  width: max-content;
  position: relative;
  display: inline-flex;

  &::after {
    width: 0;
    height: 1px;
    content: "";
    position: absolute;
    top: calc(50% + 5px);
    left: calc(100% + 12px);
    background-color: ${token.color.orange.TINT_50};
    transition: width
      ${token.transition.duration[3] + " " + token.transition.timing[0]};
  }

  ${Logo} {
    background-image: linear-gradient(
      90deg,
      ${token.color.neutral.TINT_10} 50%,
      ${token.color.orange.TINT_50} 50%
    );
    background-size: 200% 200%;
    background-position: 0% 0%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover,
  &:focus {
    &::after {
      width: 60px;
      transition-delay: 600ms;
    }

    ${Logo} {
      background-position: -100% 0%;
      transition-delay: 0;

      ${LogoSpan} {
        &:nth-child(2) {
          width: 28px !important;
        }

        &:nth-child(4) {
          width: 56px !important;
        }
      }
    }
  }
`

export const Styled = {
  LogoSpan,
  LogoLink,
  Logo,
}
