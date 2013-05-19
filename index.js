const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": {
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "roboto-black": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Roboto Black", "Roboto-Black" ]
      },
      "roboto-blackitalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Roboto Black Italic", "Roboto-BlackItalic" ]
      },
      "roboto-bold": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Roboto Bold", "Roboto-Bold" ]
      },
      "roboto-boldcondensed": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Roboto Bold Condensed", "Roboto-BoldCondensed" ]
      },
      "roboto-boldcondenseditalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Roboto Bold Condensed Italic", "Roboto-BoldCondensedItalic" ]
      },
      "roboto-bolditalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Roboto Bold Italic", "Roboto-BoldItalic" ]
      },
      "roboto-condensed": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Roboto Condensed", "Roboto-Condensed" ]
      },
      "roboto-condenseditalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Roboto Condensed Italic", "Roboto-CondensedItalic" ]
      },
      "roboto-italic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Roboto Italic", "Roboto-Italic" ]
      },
      "roboto-light": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Roboto Light", "Roboto-Light" ]
      },
      "roboto-lightitalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "300",
        "local": [ "Roboto Light Italic", "Roboto-LightItalic" ]
      },
      "roboto-medium": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Roboto Medium", "Roboto-Medium" ]
      },
      "roboto-mediumitalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "500",
        "local": [ "Roboto Medium Italic", "Roboto-MediumItalic" ]
      },
      "roboto-regular": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Roboto Regular", "Roboto-Regular" ]
      },
      "roboto-thin": {
        "fontFamily": "Roboto",
        "fontStyle": "normal",
        "fontWeight": "250",
        "local": [ "Roboto Thin", "Roboto-Thin" ]
      },
      "roboto-thinitalic": {
        "fontFamily": "Roboto",
        "fontStyle": "italic",
        "fontWeight": "250",
        "local": [ "Roboto Thin Italic", "Roboto-ThinItalic" ]
      }
  }
};
