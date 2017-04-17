# Elementory
Elementory is a tiny library for constructing HTML elements with JavaScript.
 
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
Grab the source from [here](https://raw.githubusercontent.com/agorischek/elementory/master/elementory.min.js) and toss it in your project.
```
https://raw.githubusercontent.com/agorischek/elementory/master/elementory.min.js
```

## Basic Usage
The simplest usage is passing a `tag` and `content`:
```js
element("div","Hello World!");
```
```html
<div>Hello World!</div>
```

## Adding attributes
HTML attributes can be passed in as properties of an object:
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
Multiple elements can be created with one call, by passing an array as the `content` parameter.
```js
element("li",["Apples","Bananas","Oranges"],{class:"unchecked"});
```
```html
<li class="unchecked">Apples</li><li class="unchecked">Bananas</li><li class="unchecked">Oranges</li>
```

## Self-closing elements
Any element can be constructed with a self-closing tag by setting `content` to `false`.
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