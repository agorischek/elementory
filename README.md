# Elementory
Elementory is a tiny library for constructing HTML elements with JavaScript.

[![Build Status](https://img.shields.io/travis/agorischek/elementory.svg)](https://travis-ci.org/agorischek/elementory)
[![Version](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/elementory)
[![License](https://img.shields.io/github/license/agorischek/elementory.svg)](https://github.com/agorischek/elementory/blob/master/LICENSE)
 
## Before & After
If you find yourself getting tripped up on quotation marks while doing this:
```js
$(this).html("<a class='" + displayType + "' id='welcome' href='" + profileURL + "'>Hello, " + name + "</a>");
```
Elementory lets you do this instead:
```js
$(this).html(element({
    tag:"a",
    content:"Hello, " + name,
    class:displayType,
    id:"welcome",
    href:profileURL
}));
```

## Installation
For use in the browser:
```html
<script src="https://unpkg.com/elementory/elementory.min.js"></script>
```
For use in Node:
```bash
$ npm install elementory
```
```js
var element = require("elementory")
```

## Basic Usage
The simplest use is passing the `tag` and `content` arguments:
```js
element("div","Hello World!");
```
```html
<div>Hello World!</div>
```

## Adding attributes
HTML attributes can be passed in as object properties of the `attributes` argument:
```js
element("a","Confirm",{
    class:"important",
    id:"confirm-button"
});
```
```html
<a class="important" id="confirm-button">Confirm</a>
```

## Constructing multiple elements
Multiple elements can be created with one call, by passing an array as the `content` argument.
```js
element("li",["Apples","Bananas","Oranges"],{class:"unchecked"});
```
```html
<li class="unchecked">Apples</li><li class="unchecked">Bananas</li><li class="unchecked">Oranges</li>
```

## Self-closing elements
Any element can be constructed with a self-closing tag by setting the `content` argument to `false`.
```js
element("input",false,{class:"editable"});
```
```html
<input class="editable" />
```

## Alternate notation
As a stylistic alternative, all properties can be passed in as a single object—The `tag` and `content` properties are interpreted the same as the above standalone arguments, and all other properties are added to the element as attributes:
```js
element({
    tag:"span",
    content:"Turn Left",
    class:"left",
    id:"next-instruction"
});
```
```html
<span class="left" id="next-instruction">Turn Left</span>
```

## Defaults
If not specified, `element()` will default to a `div` tag and `""` as content:
```js
element();
```
```html
<div></div>
``` 

## Benefits
Elementory removes the messiness of manually concatenating strings and variables to produce HTML—and it makes it far easier to comment out or remove individual pieces.

## What's the name mean?
It's a portmanteau of "element" and "factory", as well as a homophone of "elementary".