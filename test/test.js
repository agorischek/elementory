var assert = require("assert");
var element = require("../elementory.js")

var markunit = require("markunit")
var fs = require('fs');

var doc = markunit(fs.readFileSync("./README.md", "utf8"))

describe("Library", function(){

  it("should create an element with content by passing two arguments", function() {
    assert.equal(
        element("div","Hello World"),
        '<div>Hello World</div>'
    );
  });

  it("should create list when content is an array", function() {
    assert.equal(
        element({tag:"li", content:["One","Two","Three"], class:"counting"}),
        '<li class="counting">One</li><li class="counting">Two</li><li class="counting">Three</li>'
    );
  });

  it("should set element properties when object is passed as third argument", function() {
    assert.equal(
        element("a","Wikipedia", {href:"http://wikipedia.org", id:"wiki"}),
        '<a href="http://wikipedia.org" id="wiki">Wikipedia</a>'
    );
  });

  it("should construct element when all input passed as single object", function() {
    assert.equal(
        element({tag:"code", content:"var i = 0", class:"javascript"}),
        '<code class="javascript">var i = 0</code>'
    );
  });

  it("should construct nested elements when function is passed as content argument", function() {
    assert.equal(
        element("ul", element({tag:"li",content:["Apples","Bananas","Oranges"], class:"test"})),
        '<ul><li class="test">Apples</li><li class="test">Bananas</li><li class="test">Oranges</li></ul>'
    );
  });

  it("should construct a single element when given array with only one item", function() {
    assert.equal(
        element({tag:"p",content:["There's only one thing here"]}),
        '<p>There\'s only one thing here</p>'
    );
  });

  it("should construct an empty div when passed no arguments at all", function() {
    assert.equal(
        element(),
        '<div></div>'
    );
  });

  it("should construct an empty element when passed only the tag argument", function() {
    assert.equal(
        element("h1"),
        '<h1></h1>'
    );
  });

  it("should construct a self-closing element when content argument is false", function() {
    assert.equal(
        element("input",false,{class:"editable"}),
        '<input class="editable" />'
    );
  });

  it("should construct a self-closing element when false content is passed in object", function() {
    assert.equal(
        element({tag:"input",content:false,class:"editable"}),
        '<input class="editable" />'
    );
  });

})

describe("Documentation", function(){

  it("should contain at least one h1", function(){
    doc.markup.has("h1")
  })

  it("should contain at least one h2", function(){
    doc.markup.has("h2")
  })

  it("should not contain double-indented lists", function(){
    doc.markup.no("li li")
  })

  it("should not have any curly quotes in code snippets", function(){
    doc.code.no(["“","”"])
  })

  it("should not have the library's name in lower-case form in the copy", function(){
    doc.copy.no("elementory")
  })

  it("should contain installation instructions", function(){
    doc.code.has("npm install")
  })

})
