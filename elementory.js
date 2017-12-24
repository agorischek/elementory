//  The element function can be called either with a single object including all relevant properties as the first argument, or with the HTML tag as the first argument, the content as the second, and an object of attributes as the third.
var element = function(requiredPropertiesOrTag,optionalContent,optionalAttributes){
    var properties = "";
    var tag = "";
    var content = null;
    var attributes = "";
    var html = "";
    var defaultTag = "div";
    var defaultContent = "";
    var openingTag = "";
    var closingTag = "";
//  If the first argument is an object, then we proceed based on its properties.
    if(typeof(requiredPropertiesOrTag) === "object"){
        properties = requiredPropertiesOrTag;
//  Use the tag and content submitted, else fall back to the defaults.
        if(properties.tag){
            tag = properties.tag;
        }
        else{
            tag = defaultTag;
        }
        if(properties.content || properties.content === false){
            content = properties.content;
        }
        else{
            content = defaultContent;
        }
//  Iterate over the properties, and build HTML attributes for all properties other than tag and content.
        for (var property in properties){
            if (properties.hasOwnProperty(property)) {
                if(property !== "tag" && property !== "content"){
                    attributes = attributes.concat(" " + property + "=\"" + properties[property] + "\"");
                }
            }
        }
    }
//  If the first argument isn't an object, we assume it's the HTML tag, and we look for additional arguments.
    else{
        if(requiredPropertiesOrTag){
            tag = requiredPropertiesOrTag;
        }
        else{
            tag = defaultTag;
        }
        if(optionalContent || optionalContent === false){
            content = optionalContent;
        }
        else{
            content = defaultContent;
        }
        if(optionalAttributes){
            for (var attribute in optionalAttributes){
                if (optionalAttributes.hasOwnProperty(attribute)) {
                    attributes = attributes.concat(" " + attribute + "=\"" + optionalAttributes[attribute] + "\"");
                }
            }
        }
    }
//  If content is false, create a self-closing element.
    if(content === false){
        openingTag = "<" + tag + attributes + " />";
    }
//  Otherwise, create a normal opening tag
    else{
        openingTag = "<" + tag + attributes + ">";
    }
    var closingTag = "</" + tag + ">";
//  If content is an array, then process it item by item.

    if(Array.isArray(content)){
        for (var index = 0; index < content.length; ++index) {
            html = html.concat(openingTag + content[index] + closingTag);
        }
    }
//  If content is false, then the entire element is just the opening tag.
    else if(content === false){
        html = openingTag
    }
    else{
        html = openingTag + content + closingTag;
    };
//  Return the final built product.
    return html;
}