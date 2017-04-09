function element(object){
    var tag = object.tag;
    var content = object.content;
    var attributes = "";
    var html = "";
    for (var property in object){
        if (object.hasOwnProperty(property)) {
            if(property !== "tag" && property !== "content"){
                attributes = attributes.concat(" " + property + "=\"" + object[property] + "\"");
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