import styled from "styled-components"
import { motion } from "framer-motion"

import { token } from "../../utils/tokens"

interface IProps {}

const variants = {
  hidden: { top: "-100px" },
  visible: {
    top: "0px",
    transition: { delay: 0, duration: 0.5, ease: "easeInOut" },
  },
}

const Header = styled(motion.header).attrs(() => ({
  initial: "hidden",
  variants,
}))`
  width: 100%;
  height: 100px;
  position: fixed;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr;
  border-bottom: 1px solid ${token.color.neutral.TINT_80};
  background-color: ${token.color.neutral.TINT_100};
  z-index: ${token.zIndex[5]};
`

export const Styled = {
  Header,
}
