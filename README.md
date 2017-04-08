# SculptJS
SculptJS is a tiny library for building HTML elements from JavaScript objects.
 
## Before & After
If you find yourself doing this:
```js
$(this).html("<a class='" + displayType + "' id='welcome' href='" + profileURL + "'>Hello, " + name + "</a>");
```
Sculptjs lets you do this instead:
```js
$(this).html(sculpt({
    element:"a",
    content:"Hello, " + name,
    class:displayType,
    id:"welcome",
    href:profileURL
}));
```
## Usage

Grab the source from [here](https://raw.githubusercontent.com/agorischek/sculptjs/master/sculpt.min.js) and toss it in your project.

Just pass an object into `sculpt()`, including an `element` property for the HTML tag and `content` property for the display text. All other properties will be added to the HTML element as attributes.

So this:
```js
sculpt({
    element:"div",
    content:"Hello World!",
    id:"Hello"
});
```
Generates this:
```html
<div id="Hello">Hello World!</div>
```
    
## Benefits
* No need to fuss with all those extra quotation marks
* Way easier to comment out individual pieces
* No dependencies