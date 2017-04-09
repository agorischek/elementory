//  The element function cal be called either with a single object including all relevant properties as the first argument, or with the HTML tag as the first argument, the content as the second, and an object of attributes as the third.
function element(requiredPropertiesOrTag,optionalContent,optionalAttributes){
    var properties = "";
    var tag = "";
    var content = "";
    var attributes = "";
    var html = "";
    var defaultTag = "div";
    var defaultContent = "";
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
        if(properties.content){
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
        if(optionalContent){
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
    var openingTag = "<" + tag + " " + attributes + ">";
    var closingTag = "</" + tag + ">";
//  If content is an array, then process it item by item.
    if(Array.isArray(content)){
        for (var index = 0; index < content.length; ++index) {
            html = html.concat(openingTag + content[index] + closingTag);
        }
    }
    else{
        html = openingTag + content + closingTag;
    }
//  Return the final built product.
    return html;
}