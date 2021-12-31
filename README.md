# Web Dev & Project WallBot Information

- [Web Dev & Project WallBot Information](#web-dev--project-wallbot-information)
  - [Coding Style Guide](#coding-style-guide)
  - [Workbench Gear and Setup: Automate and Optimize Workflow](#workbench-gear-and-setup-automate-and-optimize-workflow)
    - [Gulp](#gulp)
      - [Install gulp-cli](#install-gulp-cli)
      - [Create package.json](#create-packagejson)
      - [Install Gulp as a development dependency](#install-gulp-as-a-development-dependency)
      - [Confirm Successful Installation](#confirm-successful-installation)
      - [Create the gulpfile](#create-the-gulpfile)
      - [Concatenation, minification and Gzipping](#concatenation-minification-and-gzipping)
      - [Sass](#sass)
      - [Installing Sass / gulp-sass](#installing-sass--gulp-sass)
      - [Gulp API](#gulp-api)
      - [Gzipping](#gzipping)
  - [Writing Future Proof JavaScript](#writing-future-proof-javascript)
    - [Offline First: Service Worker](#offline-first-service-worker)
    - [CSS & Responsive Tips](#css--responsive-tips)
        - [FILL THIS WITH:](#fill-this-with)
      - [Start small](#start-small)
      - [Patterns](#patterns)
      - [Tables](#tables)
      - [Fonts](#fonts)
      - [Breakpoints in CSS](#breakpoints-in-css)
    - [Optimizations](#optimizations)
      - [Units, Formats, Environments](#units-formats-environments)
      - [Images](#images)
    - [Performance](#performance)
    - [AIRA & Accessibility](#aira--accessibility)
      - [General advice about alt attributes](#general-advice-about-alt-attributes)
  - [Write Unit Tests First](#write-unit-tests-first)
    - [Defining and / Writing Expectations](#defining-and--writing-expectations)
    - [Install a Library / Test Suite](#install-a-library--test-suite)
      - [Jasmine VScode Extension](#jasmine-vscode-extension)
    - [Exploring the SpecRunner](#exploring-the-specrunner)
    - [Identifying Suites and Specs](#identifying-suites-and-specs)
    - [Writing a Test](#writing-a-test)
      - [Multiple Tests per Spec](#multiple-tests-per-spec)
      - [Getting Started with the Red-Green-Refactor Cycle](#getting-started-with-the-red-green-refactor-cycle)
      - [Writing a test EXAMPLE](#writing-a-test-example)
        - [Writing our Implementation](#writing-our-implementation)
        - [Iterating on our Implementation](#iterating-on-our-implementation)
        - [Complete our Implementation](#complete-our-implementation)
      - [Removing Redundant Code](#removing-redundant-code)
      - [Testing Asynchronous Code](#testing-asynchronous-code)
        - [Writing an Asynchronous Test](#writing-an-asynchronous-test)
        - [Correcting a Asynchronous Test](#correcting-a-asynchronous-test)
- [Project WallBot To-Do List](#project-wallbot-to-do-list)
  - [app.js](#appjs)
  - [TradeOgre.js](#tradeogrejs)
  - [KuCoin.js](#kucoinjs)
  - [Create API Fetch GET](#create-api-fetch-get)
  - [Create API Fetch POST](#create-api-fetch-post)
  - [Create a Safe Way to Store and Use API Keys](#create-a-safe-way-to-store-and-use-api-keys)
  - [Build HTML From Stored Data](#build-html-from-stored-data)
- [Extra Information](#extra-information)
  - [Liquidity in Crypto Space](#liquidity-in-crypto-space)
    - [What is Liquidity](#what-is-liquidity)
    - [How to Use Liquidity](#how-to-use-liquidity)
  - [Three Different Kinds of Ways Transactions Can Happen](#three-different-kinds-of-ways-transactions-can-happen)
    - [Peer to Peer](#peer-to-peer)
    - [Automated Market Maker (AMM)](#automated-market-maker-amm)
    - [SWAPS](#swaps)

________
| Project Root Folders/Files | Comment                                                      |
|----------------------------|:-------------------------------------------------------------|
| `/.EXAMPLES`               | Code examples                                                |
| `/.git`                    | Default git files                                            |
| `/.OLD`                    | OLD code                                                     |
| `/.vscode`                 | VScode settings                                              |
| `/lib`                     | Library for Jasmine Test Suite                               |
| `/spec`                    | Test Scripts                                                 |
| `/src`                     | All project source files like images, css, js, etc..         |
| `.gitignore`               | Files to ignore by git                                       |
| `index.html`               | Home page                                                    |
| `MIT.LICENSE`              | License for Jasmine                                          |
| `package.json`             | NPM packages                                                 |
| `README.MD`                | This readme file                                             |
| `SpecRunner.html`          | Test page                                                    |
| `workspace.code-workspace` | VScode file to save/load complete workspace for this project |
________
Cut/copy this markmap for the following projects:

```markmap
# New Project

## Workspace setup

- [ ] [Npm + Gulp automation](#gulp)
- [ X ] [Jasmine Test Suite](#install-a-library--test-suite)

## [Writing a test EXAMPLE](#writing-a-test-example)

- [ ] [Writing our Implementation](#writing-our-implementation)
- [ ] [Iterating on our Implementation](#iterating-on-our-implementation)
- [ ] [Complete our Implementation](#complete-our-implementation)
- [ ] [Removing Redundant Code](#removing-redundant-code)

## Full Responsive Front-End

- [ ] @media query breakpoints
- [ ] Patterns
- [ ] [Grid Layouts - ex url](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [ ] [Flexbox - ex url](https://classroom.udacity.com/courses/ud893/lessons/3533879576/concepts/36044585420923)
- [ ] Tables
- [ ] Images
- [ ] Tap Targets
- [ ] Fonts

## [Accessibility](#aira--accessibility)

- [ ] Focus
- [ ] Navigation
- [ ] AIRA
- [ ] CSS Styling

## Optimization & Performance

- [ ] [Sass](#sass)
- [ ] Dev tools performance
```

________

## Coding Style Guide

Check out the [Udacity's Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) on how to write and style your code the proper way.

Use [the Get BEM method](http://getbem.com/) for id and classnames on the key elements _Block, Element and Modifier_.

Implement effective semantic navigation for AIRA / Accessibility using headings, link text and landmarks

________

## Workbench Gear and Setup: Automate and Optimize Workflow

### Gulp

Use [Gulp](https://github.com/gulpjs/gulp), a toolkit that helps you automate painful or time-consuming tasks in your development workflow.

And / or use Grunt for tasks and is slower then Gulp

#### Install gulp-cli

Let's go ahead and install Gulp (with nodeJS/npm). First, we'll install the command line interface for Gulp.\
Open up the terminal on your machine (e.g., Terminal on Mac, or Command Prompt on Windows) and enter in the following command:

`npm install --g gulp-cli`

This command uses npm to install the Gulp command line interface globally (i.e., rather than being installed in a single folder) on your computer.

#### Create package.json

Next, create a file named package.json. How do we go about doing this? While still in your terminal, navigate to the root of a project's directory (i.e., the "highest-level" directory in the hierarchy, or the folder that contains all other folders and files), and enter in this command:

`npm init`

Again, feel free to follow along in the root of any existing project you choose, or simply navigate to the Lesson 2 folder in the provided course code above.

So what happens after typing in `npm init`? You will be asked a few quick questions about a project name, description, etc. After answering those questions, the `package.json` file should be created automatically!

#### Install Gulp as a development dependency

Now, go ahead and install Gulp in the `devDependencies` of your `package.json` file. To do so, make sure you are still in the same root directory in your terminal. Then, type in this command:

`npm install --save-dev gulp`

This tells npm that the project depends on Gulp during development.

#### Confirm Successful Installation

Finally, let's confirm successful installation! Open up your `package.json` file. How do things look? The `devDependencies` part should have been automatically updated to look something like this:

```json
  "devDependencies": {
    "gulp": "^3.9.1"
  }
  ```

At this point, enter `gulp -v` in your terminal. If your version of Gulp does not begin with the number 3, use the following command to install Gulp: `npm install --save-dev gulp@3.9.1` (rather than using the command in the third step above).

________

If you don't see a "CLI version" and a "Local version" listed after checking your version of Gulp (i.e., with `gulp -v`), take a look at [the official Gulp Quick Start Guide](https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md). Detailed instructions are listed in the link.

________

⚠️ Seeing Errors with npm? ⚠️

When trying to run `npm` commands in your terminal, are you running into permissions errors? Feel free to review [this article](https://docs.npmjs.com/getting-started/fixing-npm-permissions) in the official documentation for resolution.

If you're still blocked, check out [this post](https://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo/) in StackOverflow.

________

#### Create the gulpfile

At this point, Gulp has been fully installed! Before we head into the next section, create a file named `gulpfile.js` in your project's root directory. Inside that file, type in the following code:

```js
const gulp = require("gulp");

gulp.task("default", function() {
  // code for your default task goes here
});
```

What's happening here? We first tell NodeJS that Gulp is needed. We can access it with the variable `gulp`. Then, we define the "default" task.

Note that this task runs a function. Now, how do we go about actually running this "default" task? We can simply enter in `gulp` in the terminal! Try putting a `console.log();` expression inside the function, then run the "default" task with the `gulp` command. What do you see?

________

#### Concatenation, minification and Gzipping

VScode extensions:

  [JS & CSS Minifier (Minify)](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify)

Description: Easily Minify ES5/ES6/ES7/ES8 and CSS. Supports minify on save, minify selection & custom configurations!

#### Sass

Why Use [Sass](https://github.com/sass/sass)?

The main goal of Sass (_syntactically awesome stylesheets_) is to make it easier to write CSS. Sass "extends" CSS by including features you'd normally see in a typical programming language, such as variables, nesting, functions, and even arithmetic operators. This allows developers to build stylesheets faster!

However, there is one drawback to all this: we need to _transpile_ Sass code in order for your browser to understand it. By transpiling, what we are doing is reproducing the code into another language. There is good news: we can have Gulp take care of all this for us! This is where `gulp-sass` comes in.

#### Installing Sass / gulp-sass

We first install it locally (i.e., only within that project's folder) with the following command:

```npm
npm install gulp-sass
```

Then, within the same `gulpfile.js` file, we require it with the following expression:

```js
const sass = require('gulp-sass');
```

Finally, we create a "styles" task with this code:

```js
gulp.task("styles", function() {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css"));
});
```

This creates a new Gulp task that can be run by typing `gulp styles` in the terminal. Keep in mind that this "styles" task, like our "default" task from earlier, is really just a function!

So what's going on in the code itself? The expression `gulp.src('sass/**/*.scss')` looks for files with the `.scss` extension inside the `sass` folder, as well as inside potential sub-directories. From the `.pipe(sass())` part of the code and on, we tell Gulp to run it through Sass (and display errors, if any) before putting the newly-transpiled code into a new CSS file.

#### Gulp API

________

For more details regarding Gulp's API (e.g., How does the `task()` method work? What do I pass into `src()`?), check out [the official documentation](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md).

________

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

### CSS & Responsive Tips

##### FILL THIS WITH:

[Responsive Web Design Fundamentals - Udacity Course](https://classroom.udacity.com/courses/ud893)

#### Start small

Start small, then build up to bigger screen sizes. Starting small will also help with the performance of the code.
Check if the `<meta name="viewport" content="width=device-width, initial-scale=1.0">` line in the `index.html` file is correct.


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

#### Images

[Images](https://www.udacity.com/course/responsive-images--ud882)

|                  | Lossy | Lossless |  SVG  |
|------------------|:-----:|:--------:|:-----:|
| Hamburger Menu   | **X** |          | **X** |
| Hero Image       |       |  **X**   |       |
| Image Thumbnails | **X** |          |       |

Create / Automate (with the npm grunt and responsive-images packages) multiple sizes of the same picture that you can set per `screen-width`.

________

### Performance

- Large JS scripts @ bottom of HTML page, right before closing body tag.
- Use dev tools - performance to analyse different functions

Check out the [Website Performance Optimization](https://classroom.udacity.com/courses/ud884) course from Udacity.

________

### AIRA & Accessibility

[Web Accessibility - Udacity Course](https://classroom.udacity.com/courses/ud891)

#### General advice about alt attributes

- Use proper `alt="...";` tags so they make sense when e.g someone uses a screen reader
- `alt` attributes should be descriptive for important images, like this body surfer. Because body surfing is important, I guess.
- `alt` attributes should be empty for images that are just decorations, like this boiler image. Do you get the joke? It's a boiler to represent boiler plate code, which is sometimes empty of content.
- `alt` attributes should be set on every image, just like this pig is set on being so darn cute.

________

## Write Unit Tests First

Tests should be made before any JS coding starts. This will help to see if the outcome of a code/test will be the same as the expectation, if a test and so the following JavaScript coding will be fail proof and **it will help save time debugging not working code!**

**A test = Validating an expectation** about something.

Failing a test is not always bad, you could create a test that is ment to fail to see if an expectation can be validated, or not (failing) to pass a certain criteria for example.

Like the wings of an airplane that are build to move a bit, but not so much that they will tear apart. So you could build a test that should make the wings tear apart. If a plane fails the test, that is a good thing.

JavaScript doesn't provide any test functions by default, so a external Library (Test Suite) is needed.

**NOTE:**

When using math, think about [JavaScript's Floating Point Math Broken?](http://stackoverflow.com/questions/588004/is-floating-point-math-broken) when a calculation/expectation keeps failing (decimals only?).

### Defining and / Writing Expectations

Lets write down the expectations in our tests as comments above the test.

```js
// Unit Test Example 1

// Example:
// Expect add (2, 3) to equal 5
expect(add(2, 3)).toBe(5);

// Example:
// Expect add() to throw an error if x/y are not numbers
expect(add(2, 'test')).toThrow();

// Example:
// Expect add(0.1, 0.2) to equal 0.3
expect(add(0.1, 0.2)).toBe(0.3);

```

________

### Install a Library / Test Suite

To install [Jasmine](https://jasmine.github.io/) standalone on your local box (where {#.#.#} below is substituted by the release number downloaded):

1. Download the standalone distribution for your desired release from the [releases page](https://github.com/jasmine/jasmine/releases).
2. Unzip all the `/lib, /src, /spec` folders and the `SpecRunner.html, etc.` files to your project directory.

Add AND edit `{#.#.#}` to the release version in the index HTML file of your project:

```html
<link rel="shortcut icon" type="image/png" href="lib/jasmine-{#.#.#}/jasmine_favicon.png">
<link rel="stylesheet" type="text/css" href="lib/jasmine-{#.#.#}/jasmine.css">

<script type="text/javascript" src="lib/jasmine-{#.#.#}/jasmine.js"></script>
<script type="text/javascript" src="lib/jasmine-{#.#.#}/jasmine-html.js"></script>
<script type="text/javascript" src="lib/jasmine-{#.#.#}/boot.js"></script>
```

Go live with your project and check if the SpecRunner is working by going to `yourproject.url/jasmine/SpecRunner.html`.

#### Jasmine VScode Extension

Instead of the browser you can also use a VScode extension:

1. Install the [Jasmine Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-jasmine-test-adapter) VScode extension
2. Restart VS Code and open the Test view
3. Run / Debug your tests using the Run / Debug icons in the Test Explorer or the CodeLenses in your test file

________

### Exploring the SpecRunner

Open the `SpecRunner.html` file and then you'll see SpecRunner is using multiple scripts.

The first are for styling, the second rows with scripts are libraries. What is more important are the following scripts:

1. The `<!-- include source files here... -->`
   - These are all your application files
2. The `<!-- include spec files here... -->`
   - These are the files where we will write our test.

________

### Identifying Suites and Specs

The relations between the HTML page and the JS code are:

- **<font color='black'>describe</font>** calls are colored <font color='black'>black</font> and called **suites**
- **<font color='green'>it</font>** calls are colored <font color='green'>green</font> and are called **specs**

**<font color='green'>it</font>** is used to identify a specification (or for short: a spec). A spec is just a container for a test, a way to identify the exact feature that we are testing. If any expectation(s) returns `true`, the expectation(s) passes the test. If any expectation returns `false`, the expectation fails the test.

As **<font color='black'>describe</font>** is used to identify a suite, a group of related specs (like nested functions, where the first one is the describe calls aka suites and the rest are it calls aka specs. Describe / Suites are like a organisation tool, a level of indentation.

________

### xif 

### Writing a Test

Lets start writing a test and explain each part:

```js
expect(add(0.1, 0.2)).toBe(0.3);
```

- **expect**
  - Each test, starts with a call to **expect**, you can think of this as the launching point, it's whats starts the process
  - The expect function accepts a single value called **the actual**
- **add(0.1, 0.2)**
  - This is the **actual**, a single value
- **.toBe(0.3)**
  - Now we need to tell what **comparison** we want to use against the actual, this comparison method is called **the matcher**
  - Jasmine includes a lot of different matches, but you can also create your own
  - Finally we give the expectation that the actual should give

So the above test would be the same as this, once it has been evaluated by the Jasmine framework:

```js
add(0.1, 0.2) === 0.3;
```

You can also negate a test by using `.not` before the matcher `.toBe()`:

```js
expect(add(0.1, 0.2)).toBe(0.3);

expect(add(0.1, 0.2)).not.toBe(0.1);
```

This second test will return `true`.

#### Multiple Tests per Spec

When using multiple tests per spec, keep in mind that a test only passes if the outcome is `true`. So when you use a matcher like toBe() AND not.toBe(), both should return `true` to pass the test. If one of both returns `false`, the test fails.

________

#### Getting Started with the Red-Green-Refactor Cycle

The real power of testing will be clear when you write your tests before you start writing any code. This is called the **<font color='red'>Red</font>-<font color='green'>Green</font>-Refactor Cycle**. It is called this, because:

1. You'll write your test first and then they will all fail, since there is no code to make them pass
2. Then you'll write code required to make your tests pass
3. When every test passes, you can continue to refactor your code and adding new features (starting from 1.)

________

#### Writing a test EXAMPLE

Let's start writing a test. We need to create 2 files in 2 separated folders:

|                      |                                                 |
|----------------------|-------------------------------------------------|
| /spec/projectSpec.js | The spec file is the file for writing the tests |
| /src/project.js      | The source file, is the actual project code     |

And we need to update the `SpecRunner.html` file to source for these 2 files. So open the `SpecRunner.html` file and edit the source and spec files to match the right files.

Let's create an Address Book. What functionality would be helpfull for a address book? I think being able to add a new contact would be pretty useful.

I'll describe the new suite `('Address Book')` and within that suite I'll call a spec `('should be able to add a contact')`. Let's take the object oriented approach to this problem, so lets instantiate a new address book in our spec: `var addressBook = new AddressBook(),` object in our spec.\

We then need to create a test to add the new contact
So the test would look something like this:

```js
describe('Address Book', function() {
  it('should be able to add a contact', function(){
    var addressBook = new AddressBook(),
    thisContact = new Contact();

    addressBook.addContact(thisContact);

    //
  })
});
```

(The comment line is where you should write your test, of course uncommented)

Now to add a contact, we need a sort of **add new contact method** in the address book.
What would I pass to addContact? That's right: `(thisContact)`. So we need to create a new object `thisContact = new Contact();` instantiated as `thisContact`.

So now we have to think about what would be a good way to test that this new contact is actually added to the address book. The test (should be something like this:

```js
expect(addressBook.getContact(0)).toBe(thisContact);
```

I should **expect**, that when I get the **First contact (.getContact(0))** in my `addressBook` that this would be the same `.toBe` as `(thisContact)`.

By doing this, you'll see you also have to create a `getContact()` method in my `addressBook` method, that accepts an integer index `(0)`.

________

##### Writing our Implementation

If you run the `SpecRunner.html` file, you'll see your tests fail. That's because we have only written the **<font color='red'>Red</font>** part of the **Refactor Cycle**. So now it's time to write the **<font color='green'>Green</font>** part of the Refactor Cycle.

We need to start writing our implementation of our addressBook and we will write this in the **`/src/project.js`** file.

________

##### Iterating on our Implementation

Now that we know that our test is failing, let's start iterating our implementation to get this test turn <font color='green'>green</font>.

So let's open up `/src/project.js` and start writing our implementation in there.

If you open the SpecRunner.html you can see the error: `ReferenceError: addressBook is not defined`. Below that you can see a line that shows in which file the error is and at the end it shows a number, this is the line where the error is at your spec file.

You can fix this by writing a constructor function in the `/src/project.js` file. Refresh the SpecRunner and fix the the next error.

When you create a new constructor function in a new file, don't forget to update the link to this script in the `SpecRunner.html` file.

________

##### Complete our Implementation

Now we have to write our JavaScript code. As an example for the `addressBook`:

```js
/src/AddressBook.js
**********************

function addressBook() {
  this.contacts = [];
}

addressBook.prototype.getContact = function(contact) {
  this.contacts.push(contact);
}

addressBook.prototype.getContact = function(index) {
  return this.contacts[index];
}
```

________

#### Removing Redundant Code

To remove duplicated / redundant code, you can create a `beforeEach(function()){};`  to move that code out of scope like this:

```js
describe('Address Book', function() {
  var addressBook,
  thisContact;

  beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
  });

  it('should be able to add a contact', function() {
    addressBook.addConact(thisContact);

    expect(addressBook.getContact(0)).toBe(thisContact);
  });

  it('should be able to delete a contact', function() {
    addressBook.addContact(thisContact);
    AddressBook.deleteConact(0);

    expect(addressBook.getContact(0)).not.toBeDefined();
  });
});

...
```

________

#### Testing Asynchronous Code

Testing asynchronous functions is a bit different because we need to inform the testing framework that the task has completed.

Imagine a API call to a server, to get a list of contacts and send that to the application.

To make that function asynchronous we use the `setTimeout(function() {});`

```js
function addressBook() {
  this.contacts = [];
  this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function )cb) {
  var self = this;

  setTimeout(function() {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
}

...
```

The important are the `self.initialComplete = true;` lines of code.

________

##### Writing an Asynchronous Test

```js
...

describe('Async Address Book', function() {
  it('should grab initial contacts', function() {
    var addressBook = new AddressBook();

    addressBook.getInitialContacts();
    expect(addressBook.initialComplete).toBe(true);
  });
});
```

________

##### Correcting a Asynchronous Test

Now, if your asynchronous functions fail, take a look if the test isn't running before the asynchronous function has completed its task.

So lets go back in the example and fix this:

```js
  describe ('Async Address Book', function() {
    // moved the addressBook variable to the 'suite level scope'
    var addressBook = new AddressBook();
    // added beforeEach function and passed done to the callback.
    beforeEach(function(done) {
      // call the address book initial contacts and within that the done function
      addressBook.getInitialContacts(function() {
        done();
      });
    });

    it('should grab initial contacts', function(done) { // here we
      expect(addressBook.initialComplete).toBe(true);
      done();
    });
  });
```

As you see the address book is moved to the 'suite level scope'. Then a beforeEach function is added with a call for the address book initial contacts. _And within that the done function. This is what signals the testing framework that the async function is `done`_.

________

# Project WallBot To-Do List

```markmap
# WallBot Road-/Mindmap

## Front-End

### Table Trading Account

- [ ] Show information about user trading wallet.

### Table Exchange 1

- [ ] Show information about the orderbook.

- [ ] Show information about the price checker.

### Table Exchange 2

- [ ] Show information about the orderbook.

- [ ] Show information about the price checker.

## Back-End

### Get data from exchange with API Fetch GET.

### Calculate (when) profit and send a signal when there is a chance to make a profit deal

### Send trade information to user for administration/documentation

### Price / arbitrage checker

## The Actual Trader / The Smart Contract

- SM that makes a trade, ONLY when profit.
  If some of the trades will not succeed,
  no money will be spend at all.

```

Build with the [Markdown-Markmap](https://github.com/phoihos/vscode-markdown-markmap) VScode extension.

________

## app.js

## TradeOgre.js

## KuCoin.js

## Create API Fetch GET

- [x] Trade Ogre API
- [ ] KuCoin API

## Create API Fetch POST

## Create a Safe Way to Store and Use API Keys

## Build HTML From Stored Data

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

Buy/Sell coins with an algorithm that dictates how expensive something should be based on how much of it there is.

Trades occur between the user and a **Smart Contract (SC)** (peer to contract, so no middleman).

If someone buys one asset it gets more expensive because there is less of it and vise versa.\
Basically it's _supply & demand with algo's_.

Raise token 1 and lower the amount of token 2, token 1 gets cheaper and token 2 gets more expensive, because there is less of it _in a liquidity pool_.

`amount of token 1 * amount of token 2 = constant`

The constant does not change.

The higher the pool total amount, the stabler the price changes are and the lesser influence your trades will have on the price.

### SWAPS

Swaps can have no effect, to a little effect, to a massive effect to liquidity pools

________
