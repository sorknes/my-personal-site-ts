/**
 * Use these tokens for font family.
 *
 * @category Token
 */

// Load Montserrat typeface (San-Serif)
require("typeface-montserrat")

// Load Cardo typeface (Serif)
require("typeface-cardo")

const fontFamily: any = {
  PRIMARY: ["'Cardo'" + "," + "serif"],
  SECONDARY: [
    "'Montserrat'" + "," + "Helvetica" + "," + "Arial" + "," + "sans-serif",
  ],
}

export default fontFamily
