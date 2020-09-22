/**
 * This mixin provides an easy way of setting CSS media queries
 *
 * @category Mixin
 */

import { token } from "../tokens/index"

const minWidthQuery = (minWidth: string) =>
  `@media only screen and (min-width: ${minWidth})`
const maxWidthQuery = (maxWidth: string) =>
  `@media only screen and (max-width: ${maxWidth})`

export const mediaMin: any = {
  CUSTOM: minWidthQuery,
  XXS: minWidthQuery(token.breakpoint[0]),
  XS: minWidthQuery(token.breakpoint[1]),
  S: minWidthQuery(token.breakpoint[2]),
  M: minWidthQuery(token.breakpoint[3]),
  L: minWidthQuery(token.breakpoint[4]),
  XL: minWidthQuery(token.breakpoint[5]),
  XXL: minWidthQuery(token.breakpoint[6]),
}

export const mediaMax: any = {
  CUSTOM: maxWidthQuery,
  XXS: maxWidthQuery(token.breakpoint[0]),
  XS: maxWidthQuery(token.breakpoint[1]),
  S: maxWidthQuery(token.breakpoint[2]),
  M: maxWidthQuery(token.breakpoint[3]),
  L: maxWidthQuery(token.breakpoint[4]),
  XL: maxWidthQuery(token.breakpoint[5]),
  XXL: maxWidthQuery(token.breakpoint[6]),
}

export const printQuery = () => `@media print`
