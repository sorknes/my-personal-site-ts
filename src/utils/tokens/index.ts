/**
 * Collect all tokens in one file.
 *
 * @category Token
 */

import borderRadius from "./border-radius"
import colorNeutral from "./color-neutral"
import colorOrange from "./color-orange"
import spaceComponent from "./space-component"
import spaceLayout from "./space-layout"

export const token: any = {
  border: {
    radius: borderRadius,
  },
  color: {
    neutral: colorNeutral,
    orange: colorOrange,
  },
  space: {
    component: spaceComponent,
    layout: spaceLayout,
  },
}
