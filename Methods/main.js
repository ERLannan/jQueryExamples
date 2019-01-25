 var allText = $("ul").text();
$("h1").text("Some new text for the methods page");

var theHtml = $("ul").html();
$("li").html("I hacked your LI");
$("li:first-of-type").html("<a href='https://www.google.com'>Click Me to goto Google</a>")

$("img").css("width", 200);
$("img:first-of-type").attr("src", "https://www.englishforum.ch/attachments/daily-life/111615d1457679717-marten-fouine-roof-martclo.jpg");

$("img:first-of-type").click(function() {
    console.log("clicked");
    $(this).css("border", "solid 2px red");
})

//$("input").attr("type", "color");

var inp = $("input").val();

$("input").keypress(function (e) {
    console.log(e);

    if(e.which === 13) {
        console.log("hit enter");
    }
})
/* $('input[type="text"')  should have a closing bracket, like this: $('input[type="text"]') */ 

$("h1").on("click", function () {
    $(this).css("color", "purple");
})

$("input").on("keypress", function () {
    console.log("other keypress");
})

$("button").on("mouseenter", function () {
    $(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function () {
    $(this).css("font-weight", "normal");
})



$("div").on("click", function (){
    if (this.faded === false || this.faded === null) {
        // $(this).fadeOut(400, function () {
        $(this).fadetoggle(400, function () {
            console.log("fadeout done");
            this.faded = true;
        });        
    } else {
        
    }
    $(this).fadeOut(400, function () {
        console.log("fadeout done");
        this.faded = true;
    }); 
})

$("#b1").text("Fade In");
$("#b1").on("click", function () {
    $("div").slideToggle();
})