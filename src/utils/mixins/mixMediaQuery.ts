/**
 * This mixin provides an easy way of setting CSS media queries
 *
 * @category Mixin
 */

import { token } from "../tokens/index"

const minWidthQuery = (minWidth: string) => `@media (min-width: ${minWidth})`
const maxWidthQuery = (maxWidth: string) => `@media (max-width: ${maxWidth})`

export const mediaMin: object = {
  CUSTOM: minWidthQuery,
  VALUE_0: minWidthQuery(token.breakpoint[0]),
  VALUE_1: minWidthQuery(token.breakpoint[1]),
  VALUE_2: minWidthQuery(token.breakpoint[2]),
  VALUE_3: minWidthQuery(token.breakpoint[3]),
  VALUE_4: minWidthQuery(token.breakpoint[4]),
  VALUE_5: minWidthQuery(token.breakpoint[5]),
  VALUE_6: minWidthQuery(token.breakpoint[6]),
}

export const mediaMax: object = {
  CUSTOM: maxWidthQuery,
  VALUE_0: maxWidthQuery(token.breakpoint[0]),
  VALUE_1: maxWidthQuery(token.breakpoint[1]),
  VALUE_2: maxWidthQuery(token.breakpoint[2]),
  VALUE_3: maxWidthQuery(token.breakpoint[3]),
  VALUE_4: maxWidthQuery(token.breakpoint[4]),
  VALUE_5: maxWidthQuery(token.breakpoint[5]),
  VALUE_6: maxWidthQuery(token.breakpoint[6]),
}

export const printQuery = () => `@media print`
