/**
 * Collect all tokens in one file.
 *
 * @category Token
 */

import borderRadius from "./border-radius"
import breakpoints from "./breakpoints"
import colorBlue from "./color-blue"
import colorNeutral from "./color-neutral"
import colorOrange from "./color-orange"
import fontFamily from "./font-family"
import spaceComponent from "./space-component"
import spaceLayout from "./space-layout"
import transitionDuration from "./transition-duration"
import transitionTiming from "./transition-timing"
import zIndex from "./z-index"

export const token: any = {
  border: {
    radius: borderRadius,
  },
  breakpoint: breakpoints,
  color: {
    blue: colorBlue,
    neutral: colorNeutral,
    orange: colorOrange,
  },
  font: {
    family: fontFamily,
  },
  space: {
    component: spaceComponent,
    layout: spaceLayout,
  },
  transition: {
    duration: transitionDuration,
    timing: transitionTiming,
  },
  zIndex: zIndex,
}
