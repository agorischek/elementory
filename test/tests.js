tests = {
    test1:{
        number:"1",
        title:"Simple div",
        expected:'<div>Hello World</div>',
        script:function(){return element("div","Hello World");}
    },
    test2:{
        number:"2",
        title:"List items from array",
        expected:'<li class="counting">One</li><li class="counting">Two</li><li class="counting">Three</li>',
        script:function(){return element({tag:"li",content:["One","Two","Three"],class:"counting"});}
    },
    test3:{
        number:"3",
        title:"Anchor with properties object",
        expected:'<a href="http://wikipedia.org" id="wiki">Wikipedia</a>',
        script:function(){return element("a","Wikipedia",{href:"http://wikipedia.org", id:"wiki"})}
    },    
    test4:{
        number:"4",
        title:"Everything in single object",
        expected:'<code class="javascript">var i = 0</code>',
        script:function(){return element({tag:"code",content:"var i = 0",class:"javascript"})}
    },
    test5:{
        number:"5",
        title:"Nested calls",
        expected:'<ul><li class="test">Apples</li><li class="test">Bananas</li><li class="test">Oranges</li></ul>',
        script:function(){return element("ul",element({tag:"li",content:["Apples","Bananas","Oranges"],class:"test"}));}
    },
    test6:{
        number:"6",
        title:"Single element from array",
        expected:'<p>There\'s only one thing here</p>',
        script:function(){return element({tag:"p",content:["There's only one thing here"]});}
    },
    test7:{
        number:"7",
        title:"Default call",
        expected:'<div></div>',
        script:function(){return element();}
    },
    test8:{
        number:"8",
        title:"Tag only",
        expected:'<h1></h1>',
        script:function(){return element("h1");}
    },
}