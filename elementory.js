function element(requiredPropertiesOrTag,optionalContent,optionalAttributes){
    var properties = "";
    var tag = "";
    var content = "";
    var attributes = "";
    var html = "";
    var defaultTag = "div";
    var defaultContent = "";
    if(typeof(requiredPropertiesOrTag) === "object"){
        properties = requiredPropertiesOrTag;
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
        for (var property in properties){
            if (properties.hasOwnProperty(property)) {
                if(property !== "tag" && property !== "content"){
                    attributes = attributes.concat(" " + property + "=\"" + properties[property] + "\"");
                }
            }
        }
    }
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
    if(Array.isArray(content)){
        for (var index = 0; index < content.length; ++index) {
            html = html.concat(openingTag + content[index] + closingTag);
        }
    }
    else{
        html = openingTag + content + closingTag;
    }
    return html;
}