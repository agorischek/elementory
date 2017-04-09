function sculpt(object){
    var element = object.element;
    var content = object.content;
    var attributes = "";
    var html = "";
    for (var property in object){
        if (object.hasOwnProperty(property)) {
            if(property != "element" && property != "content"){
                attributes = attributes.concat(" " + property + "=\"" + object[property] + "\"");
            }
        }
    }
    var openingTag = "<" + element + " " + attributes + ">";
    var closingTag = "</" + element + ">";
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