// JavaScript Document
var lesson = 1;
var inp;

function scripts() {
    var script = "";
    var i;
    if (document.getElementById("in").value.indexOf("<script>") > -1 && document.getElementById("in").value.indexOf("</script>") > -1) {
        for (i = document.getElementById("in").value.indexOf("<script>") + 9; i < document.getElementById("in").value.indexOf("</script>"); i++) {
            script += document.getElementById("in").value.charAt(i);
        }
        eval(script);
    }
}

function change(value) {
    lesson += value;
    if (lesson < 1) {
        lesson = 1;
    }
    document.getElementById("right").disabled = false;
    if (document.getElementById("ans")) {
        document.getElementById("answer").removeChild(document.getElementById("ans"));
    }
    start(lesson);
    document.getElementById("title").innerHTML = "Lesson " + lesson;
}

function execute() {
    document.getElementById("output").innerHTML = document.getElementById("in").value;
    scripts();
}

function addlines(lines) {
    var i;
    for (i = document.getElementsByTagName('tr').length + 1; i <= lines; i++) {
        document.getElementById("cells").innerHTML += "<tr>\n<td>" + i + "</td>\n</tr>";
    }
}

function removelines(lines) {
    var i;
    for (i = 1; i <= lines; i++) {
        document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1].parentElement.removeChild(document.getElementsByTagName('tr')[document.getElementsByTagName('tr').length - 1]);
    }
}

function verify(condition) {
    if (condition) {
        document.getElementById("title").innerHTML += "<img src='check.png' id='correct' width='70px'>";
        document.getElementById("right").disabled = false;
        document.getElementById("answer").removeChild(document.getElementById("ans"));
    }
}

function disableNext() {
    document.getElementById("right").disabled = true;
}

function setButton(verification) {
    document.getElementById("answer").innerHTML = "<button id='ans' onclick=\"verify(" + verification + ");\">Check Answer</button>";
}

function start(less) {
    if (document.getElementById("correct")) {
        document.getElementById("title").removeChild(document.getElementById("correct"));
    }
    var condition;
    switch (less) {
        case 1:
            inp = "<!-- This is a comment. They do not appear on the webpage, only in the code -->\n<!-- x -->\n<!-- The above x is where you put the words for the comment -->\n<!-- \nComments can take up unlimited lines!\n-->";
            break;
        case 2:
            inp = "<!-- Now practice typing 'Comment' in a comment below -->\n";
            disableNext();
            condition = "document.getElementById('in').value.slice(57, 74).toLowerCase() == '\n<!-- comment -->'";
            setButton(condition.replace(/'/g, "`"));
            break;
        case 3:
            inp = "<!-- Below is an opening header tag -->\n<h1>\n\n</h1>\n<!-- Above is an closing header tag -->\n\n<!-- The slash makes it a closing tag. Anything inside will be a header (except the comment). Try typing something between the tags. -->";
            addlines(8);
            break;
        case 4:
            inp = "<h1>You can replace</h1>\n<h2>The 'h1', 'h2', or 'h3'</h2>\n<h3>With any tag you want!</h3>\n<!-- I will teach you some of them later. -->";
            break;
        case 5:
            inp = "<p>This is a paragraph. It is in a paragraph tag. I want to make part of it bold. How do I do that?</p>\n\n<!-- You might have guessed that we use a bold - or strong tag. You would be correct. -->\n\n<strong>This is bold!</strong>\n\n<!-- Where might we put it? Well, it can literally go in the other tag! -->\n\n<p>This is a paragraph. It is in a paragraph tag. <strong>This is bold!</strong></p>\n\n<!-- This is called nesting. Just make sure to open and close the tags so they have the correct layout when compiled. -->";
            addlines(12);
            break;
        case 6:
            inp = "<!-- Another good example of a nested tag is a divider tag or div. -->\n\n<div></div>\n\n<!-- They are invisible but are good for sorting other sections of a webpage. You can also apply styles to them, but we will learn about that later. -->\n\n<div>\n	<div>\n		<div>\n\n		</div>\n	</div>\n</div>";
            addlines(13);
            break;
        case 7:
            inp = "<!-- I am only covering the bare minimum of tags. You can find more complicated tags at w3schools.com -->";
            break;
        case 8:
            inp = "<!-- Now I will show you attributes. the format for attributes is\" attribute='value' \" -->\n\n<a>This is a link</a>\n\n<!-- It only looks like text right now. You need to add an 'href' attribute. The value for the 'href' attribute will be the link you want to go to. -->\n\n<br>\n\n<a href='https://google.com'>Click Me!</a>\n\n<!-- Normally links will open in the same tab you click them on, but this website is set to open them in a new tab so you don't lose your progress. The 'br' tag adds a space between the two links. 'br' tags don't need a closing tag. -->";
            break;
        case 9:
            inp = "<!-- Next up are buttons. The following button will open a dialog box that says 'hi' -->\n\n<button onclick=\"alert('hi');\">Click Me</button>\n\n<!-- Let's break that down. The 'onclick' attribute runs code when the tag it is on is pressed (like the button).\n\nThe value of the onclick is \"alert('hi')\".\n\n'alert' opens text in a dialog box.\n\nThe text it opens is what comes after it in parentheses. 'alert()'\n\nBecause we want to alert plain text, we put our text in quotes. \"alert('')\".\n\nThe reason that is so complex is because \"alert('')\" is JavaScript, and that is another language. Sorry for being so complex.\n\n-->";
            addlines(20);
            break;
        case 10:
            inp = "<!-- Make a button below that alerts 'bye' that says 'Click Me'. -->\n";
            disableNext();
            condition = "/<button onclick=.*alert(.*bye.*);.*>click me<&#92;/button>/.test(document.getElementById('in').value.slice(68, 118).toLowerCase())";
            setButton(condition);
            break;
        case 11:
            inp = "<!-- Make a link below that takes you to 'https://google.com' that says 'Click Me'. -->\n";
            disableNext();
            condition = "/<a href=.*https:&#92;/&#92;/google.com.*>click me<&#92;/a>/.test(document.getElementById('in').value.slice(88, 130).toLowerCase())";
            setButton(condition);
            break;
        case 12:
            inp = "<!-- Open and close a 'script' tag. (Replace the 'h1' in the h1 tag with 'script'). -->\n";
            disableNext();
            condition = "/<script><&#92;/script>/.test(document.getElementById('in').value.slice(87, 114).toLowerCase())";
            setButton(condition);
            break;
        case 13:
            inp = "<!--A 'script' tag runs its contents as JavaScript. Copy and paste 'alert(\"hi\")' between the tags -->\n\n<script>\n\n</script>";
            break;
        case 14:
            inp = "<h1>Thats all for now!</h1>";
            disableNext();
    }
    document.getElementById("in").value = inp;
    execute();
}
