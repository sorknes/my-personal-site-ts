import * as React from "react"

import { Styled } from "./Container.style"

export interface IProps {
  /** Children */
  children: React.ReactNode
  /** Set column count */
  columns?: 1 | 2 | 3 | 4
  /** Grid gap */
  noGap?: boolean
  /** Container width */
  width?: "fluid" | "fixed"
}

const Container: React.FC<IProps> = ({ children, columns, noGap, width }) => {
  return (
    <Styled.Container columns={columns} noGap={noGap} width={width}>
      {children}
    </Styled.Container>
  )
}

Container.defaultProps = {
  columns: 4,
  noGap: false,
  width: "fixed",
}

export default Container
