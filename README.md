# SculptJS
SculptJS is a tiny library for building HTML elements from JavaScript objects.
 
## Before & After
If you find yourself doing this:
	$(this).html("<a class='" + displayType + "' id='welcome' href='" + profileURL + "'>Hello, " + name + "</a>");

Sculptjs lets you do this instead:
    $(this).html(sculpt({
        element:"a",
        content:"Hello, " + name,
        class:displayType,
        id:"welcome",
        href:profileURL
    }));
    
## Benefits
* No need to fuss with all those extra quotation marks
* Way easier to comment out individual pieces
* No dependencies