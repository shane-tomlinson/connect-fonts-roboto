# connect-fonts-roboto

Roboto fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-roboto");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/roboto-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/roboto-black,roboto-blackitalic,roboto-bold,roboto-boldcondensed,roboto-boldcondenseditalic,roboto-bolditalic,roboto-condensed,roboto-condenseditalic,roboto-italic,roboto-light,roboto-lightitalic,roboto-medium,roboto-mediumitalic,roboto-regular,roboto-thin,roboto-thinitalic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* roboto-black
* roboto-blackitalic
* roboto-bold
* roboto-boldcondensed
* roboto-boldcondenseditalic
* roboto-bolditalic
* roboto-condensed
* roboto-condenseditalic
* roboto-italic
* roboto-light
* roboto-lightitalic
* roboto-medium
* roboto-mediumitalic
* roboto-regular
* roboto-thin
* roboto-thinitalic

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/roboto-black/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin
* en

5. Set your CSS up to use the new font by using the "Roboto" font-family.
```
    body {
      font-family: 'Roboto', 'sans-serif', 'serif';
    }
```

## Font Info
Roboto

* Copyright: Font data copyright Google 2011
* Trademark: Roboto is a trademark of Google.
* Designer: Google
* Designer URL: Christian Robertson 
* Vendor URL: Google.com

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-roboto
* Repo: https://github.com/shane-tomlinson/connect-fonts-roboto

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/


  

