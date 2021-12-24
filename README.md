# To-Do List

- [To-Do List](#to-do-list)
  - [Style Guide](#style-guide)
  - [Work-folder/-space: Automation, Optimization & Performance](#work-folder-space-automation-optimization--performance)
    - [Gulp](#gulp)
    - [Build CSS from HTML/JS file](#build-css-from-htmljs-file)
    - [Concatenation, minification and Gzipping](#concatenation-minification-and-gzipping)
      - [Sass](#sass)
      - [Gzipping](#gzipping)
  - [Writing Future Proof JavaScript](#writing-future-proof-javascript)
    - [Offline First: Service Worker](#offline-first-service-worker)
    - [Responsive - Start small, then build up to bigger screen sizes.](#responsive---start-small-then-build-up-to-bigger-screen-sizes)
      - [Patterns](#patterns)
      - [Tables](#tables)
      - [Fonts](#fonts)
      - [Breakpoints in CSS](#breakpoints-in-css)
    - [Optimizations](#optimizations)
      - [Units, Formats, Environments](#units-formats-environments)
    - [Performance](#performance)
    - [AIRA & Accessibility](#aira--accessibility)
      - [General advice about alt attributes](#general-advice-about-alt-attributes)
  - [Testing](#testing)
  - [What is needed](#what-is-needed)
    - [app.js](#appjs)
    - [TradeOgre.js](#tradeogrejs)
    - [KuCoin.js](#kucoinjs)
    - [Create API Fetch GET](#create-api-fetch-get)
    - [Create API Fetch POST](#create-api-fetch-post)
    - [Create a safe way to store/use api keys](#create-a-safe-way-to-storeuse-api-keys)
    - [Build html from stored data](#build-html-from-stored-data)
- [Extra Information](#extra-information)
  - [Liquidity in Crypto Space](#liquidity-in-crypto-space)
    - [What is Liquidity](#what-is-liquidity)
    - [How to Use Liquidity](#how-to-use-liquidity)
  - [Three Different Kinds of Ways Transactions Can Happen](#three-different-kinds-of-ways-transactions-can-happen)
    - [Peer to Peer](#peer-to-peer)
    - [Automated Market Maker (AMM)](#automated-market-maker-amm)
    - [SWAPS](#swaps)

________

## Style Guide

Check out the [Udacity's Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) on how to style the correct way

________

## Work-folder/-space: Automation, Optimization & Performance


### Gulp

Use [Gulp](https://github.com/gulpjs/gulp), a toolkit that helps you automate painful or time-consuming tasks in your development workflow.

### Build CSS from HTML/JS file

Use a VScode extension to **build CSS file from js/html files**?

________

### Concatenation, minification and Gzipping

VScode extensions:

  [JS & CSS Minifier (Minify)](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify)

Description: Easily Minify ES5/ES6/ES7/ES8 and CSS. Supports minify on save, minify selection & custom configurations!

#### Sass

[Sass](https://github.com/sass/sass)

Gzipping is far more effective. Doing both is ideal.

[Minification vs Gzipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/)

#### Gzipping

[Gzip Decompressor](https://marketplace.visualstudio.com/items?itemName=HyunKyunMoon.gzipdecompressor)

Description: gzip decompressor

[GZip Status](https://marketplace.visualstudio.com/items?itemName=logerfo.gzip-status)

Description: Shows the current file gzip size in Visual Studio Code status bar.

________

[Babel](https://github.com/babel/babel) - For ... ?!?

________

## Writing Future Proof JavaScript

### Offline First: Service Worker

[Web workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

### Responsive - Start small, then build up to bigger screen sizes.

#### Patterns

- Mostly Fluid
- Layout Shifter
- Column Drop
- Off Canvas

#### Tables

- [Responsive Tables](https://css-tricks.com/responsive-data-table-roundup/)
- Hidden Columns
- No More Tables
- Contained Scrolling

#### Fonts

- **Don't use short or long lines**, _ideal for web is +/- 65 CPL_ (Characters Per Line)
- Set your base `font-size: 16px;`and `line-height: 1,2em;` (maybe increase it for text heavy sites)
- [A pure CSS solution for multiline text truncation](http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/)

#### Breakpoints in CSS

Between _Major Breakpoints_ you can use _Minor Breakpoints_ for small adjustments with `@media screen an () and () {};` CSS styling.

Adjust properties like:

- Margins
- Paddings
- Increase font-size
- Icon size

### Optimizations

#### Units, Formats, Environments

- Use only relative sizes like % or em on elements so it can scale with the width/height of the viewport. Absolute will keep it's width/height (like px/cm) as the viewport size changes. _Only use absolute when the picture is smaller than the smallest viewport_.
- [Images](https://www.udacity.com/course/responsive-images--ud882)

  |   | Lossy | Lossless | SVG |
  |---|:---:|:---:|:---:|
  | Hamburger Menu | **X** |  | **X** |
  | Hero Image |   | **X**  |  |
  | Image Thumbnails | **X**  |  |  |

1. **Don't** assume that the _windowsize_ always stays the same and **don't** assume the _windowsize_ is the same as the _screensize_!
2. Use _**`max-width: 100%;`**_ on images so it never gets larger then it's natural width.
3. Use _**`calc()`**_ on `width:` to combine relative width with absolute margin e.g:

``` css
img: {
    width: calc((100% - 20px) / 2); // the 20px is the whitespace between the images
}
```

4. Use the **_`last-of-type`_** selector to ensure there is no margin to the right of the second image e.g:

``` css
img:last-of-type {
    margin-right: 0;
}
```

Example for 3 images next to each other with a margin of 10px to the right of the first 2 images:

``` css
body {
    margin: 0;
}
img {
    float: left;
    margin-right: 10px;
    width: calc((100% - 20px)/3); // the 20px is the white space from the margin-right
    max-width: 100%;
}
img:last-of-type {
    margin-right:0;
}
```

________

### Performance

- Large JS scripts @ bottom of HTML page, right before closing body tag.
- Use dev tools - performance to analyse different functions

________

### AIRA & Accessibility

#### General advice about alt attributes

- Use proper `alt="...";` tags so they make sense when e.g someone uses a screen reader
- `alt` attributes should be descriptive for important images, like this body surfer. Because body surfing is important, I guess.
- `alt` attributes should be empty for images that are just decorations, like this boiler image. Do you get the joke? It's a boiler to represent boiler plate code, which is sometimes empty of content.
- `alt` attributes should be set on every image, just like this pig is set on being so darn cute.

________

## Testing

Using [Jasmine](https://github.com/jasmine/jasmine) for testing:

- Exploring the SpecRunner
- Identifying Suites and Specs
- Writing a Test
  - Multiple Tests per Spec
- Getting Started with Red-Green-Refactor
- Writing AddressBookSpec.js
  - Writing our Implementation
  - Iterating on our Implementation
  - Complete our Implementation
- Another Spec
- Removing Redundant Code
- Testing Asynchronous Code
- Writing an Asynchronous Test
  - Running our First Async Test
  - Correcting our Asynchronous Test

________

## What is needed

### app.js

### TradeOgre.js

### KuCoin.js

### Create API Fetch GET

- [x] Trade Ogre API
- [ ] KuCoin API

### Create API Fetch POST

### Create a safe way to store/use api keys

### Build html from stored data

- [x] Table
- [ ] Add currency data to Table

________

# Extra Information

## Liquidity in Crypto Space

a

### What is Liquidity

b

### How to Use Liquidity

c

________

## Three Different Kinds of Ways Transactions Can Happen

### Peer to Peer

Trades occur between wallets (peer to peer: from wallet to wallet)

Like on centralized exchanges and decentralized exchanges.

### Automated Market Maker (AMM)

Trades occur between the user and a **Smart Contract (SC)** (peer to contract, so no middleman)

`amount of token 1 * amount of token 2 = constant`

Raise token 1 and lower the amount of token 2, token 1 gets cheaper and token 2 gets more expensive, because there is less of it.

### SWAPS

Swaps can have no effect, to a little effect, to a massive effect to liquidity pools

________
