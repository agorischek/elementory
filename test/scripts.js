$(function(){
    for(test in tests){
        $("#tests").append('<div id="' + test + '" class="test-holder"></div>')
        $("#" + test).html('<pre><code class="javascript test-function"></pre><pre></code><code class="html test-expected"></code></pre><pre><code class="html test-output"></code></pre><code class="test-result"></code></pre>')
        runCase(test);
    }
//    hljs.configure({useBR: true});
//    hljs.initHighlighting();
})

function escape(input){
    return $(input).text(input).html();
}

function chopFunction(input){
    var regex = /element[.\n\r]?tag/
    return regex.exec(input)
}

function checkResult(expected,actual){
    if(expected==actual){
        return true
    }
    else{
        return false
    }
}

function renderResult(result){
    if (result == true){
        return "Pass"
    }
    else if(result == false){
        return "Fail"
    }
    else{
        return "Huh?"
    }
}

function runCase(id){ 
    var script = tests[id]["script"].toString();
    var expected = tests[id]["expected"];
    var output = tests[id]["script"]();
    var result = renderResult(checkResult(expected,output))
    $("#" + id + " .test-function").html(script)
    $("#" + id + " .test-expected").html(escape(expected));
    $("#" + id + " .test-output").html(escape(output));            
    $("#" + id + " .test-result").html(result);
}
        