/**
 * Collect all tokens in one file.
 *
 * @category Token
 */

import borderRadius from "./border-radius"
import breakpoint from "./breakpoints"
import breakpoints from "./breakpoints"
import colorBlue from "./color-blue"
import colorNeutral from "./color-neutral"
import colorOrange from "./color-orange"
import spaceComponent from "./space-component"
import spaceLayout from "./space-layout"

export const token: any = {
  border: {
    radius: borderRadius,
  },
  breakpoint: breakpoint,
  color: {
    blue: colorBlue,
    neutral: colorNeutral,
    orange: colorOrange,
  },
  space: {
    component: spaceComponent,
    layout: spaceLayout,
  },
}
