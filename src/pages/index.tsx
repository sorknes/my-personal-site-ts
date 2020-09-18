import * as React from "react"

import { token } from "../utils/tokens/index"

export interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <div
      style={{
        padding: token.space[2],
        color: token.color.neutral.TINT_100,
        borderRadius: token.border.radius[2],
        backgroundColor: token.color.neutral.TINT_0,
      }}>
      Hello world!
    </div>
  )
}

Home.defaultProps = {}

export default Home
