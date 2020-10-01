import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { token } from "../../utils/tokens"

interface IProps {}

const variants = {
  hidden: {
    width: "0px",
    transition: { delay: 5, duration: 0.3 },
  },
  visible: {
    width: "auto",
  },
}

const LogoSpan = styled(motion.span).attrs(() => ({
  initial: "visible",
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

  span {
    position: relative;
    top: 3px;
    display: inline-block;
    overflow: hidden;
  }
`

const LogoLink = styled(Link)`
  width: max-content;
  display: inline-block;

  ${Logo} {
    color: ${token.color.neutral.TINT_10};
  }

  &:hover,
  &:focus {
    ${Logo} {
      color: ${token.color.orange.TINT_50};

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
