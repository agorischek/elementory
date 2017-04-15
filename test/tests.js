tests = {
    test1:{
        title:"Test thingy",
        expected:'<div class="test">Apples</div><div class="test">Bananas</div><div class="test">Oranges</div>',
        script:function(){return element({tag:"div",content:["Apples","Bananas","Oranges"],class:"test"});}
    },
    test2:{
        title:"Test thingy two",
        expected:'<span>Hello</span>',
        script:function(){return element({tag:"span",content:"Hello"});}
    },
    test3:{
        title:"Test thingy three",
        expected:'<a href="http://wikipedia.org">Wikipedia</a>',
        script:function(){return element("a","Wikipedia",{href:"http://wikipedia.org"})}
    },    
    test4:{
        title:"Test thingy four",
        expected:'<pre id="code">var i = 0</pre>',
        script:function(){return element("pre","var i = 0",{id:"code"})}
    }
}