import * as React from "react"

import { token } from "../utils/tokens/index"

export interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <div
        style={{
          padding: token.space.component[2],
          marginBottom: token.space.layout[6],
          color: token.color.neutral.TINT_100,
          borderRadius: token.border.radius[2],
          backgroundColor: token.color.neutral.TINT_0,
        }}>
        Hello world, black!
      </div>
      <div
        style={{
          padding: token.space.component[2],
          marginBottom: token.space.layout[6],
          color: token.color.neutral.TINT_100,
          borderRadius: token.border.radius[2],
          backgroundColor: token.color.orange.TINT_50,
        }}>
        Hello world, orange!
      </div>
      <div
        style={{
          padding: token.space.component[2],
          color: token.color.neutral.TINT_100,
          borderRadius: token.border.radius[2],
          backgroundColor: token.color.blue.TINT_50,
        }}>
        Hello world, blue!
      </div>
    </React.Fragment>
  )
}

Home.defaultProps = {}

export default Home
