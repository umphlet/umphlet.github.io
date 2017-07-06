// Var for random numbers to help select a quote and color
var rnd = 0;
var rnd2 = 0;
// JSON array of random quotes
var quotes = [{
    "quote": "I find there are a lot of intelligent opinions on Facebook.",
    "author": "No One Ever"
}, {
    "quote": "Wearing a fanny pack will help you get laid.",
    "author": "No One Ever"
}, {
    "quote": "An escalator can only become stairs.",
    "author": "Mitch Hedberg"
}, {
    "quote": "Be yourself. Everyone else is already taken.",
    "author": "Oscar Wilde"
}, {
    "quote": "A mind is like a parachute. It won't work if it doesn't open.",
    "author": "Frank Zappa"
}, {
    "quote": "Everybody wants to go to heaven; but nobody wants to die.",
    "author": "Albert King"
}, {
    "quote": "Anybody Got Any Cheese?",
    "author": "Steve Urkel"
}, {
    "quote": "Always remember: You’re unique, just like everyone else.",
    "author": "Alison Boulter"
}, {
    "quote": "If you dream it, you can do it.",
    "author": "Walt Disney"
}, {
    "quote": "Speak softly and carry a big stick.",
    "author": "Teddy Roosevelt"
}, ];
// Standard array of random colors
var colors = ["#ff0000", "#ff7400", "#ff7474", "#ff6dfe", "#856dfe", "#046dfe", "#6c90b6", "#b6906a", "#040175", "#dbdb6b", "#4bd5d9", "#8b3735", "#44935e", "#8ab057"];
// Function to run which will select a random quote and also insert it into the document
function changeQuote() {
    $("#quote-area").fadeOut("slow", function() {
        rnd = Math.floor((Math.random() * quotes.length));
        $("#randomQuote").text(quotes[rnd].quote);
        $("#author").text(quotes[rnd].author);
        $(".shareTweet").each(function() {
            this.href = "http://twitter.com/home/?status=\"" + quotes[rnd].quote + "\" -- " + quotes[rnd].author;
        });
        $("#quote-area").fadeIn("slow");
    });

}
// Select a random color and re-color certain elements on the page
function changeColors() {
    rnd2 = Math.floor((Math.random() * colors.length));
    $("#page").animate({
        color: colors[rnd2]
    }, {
        duration: 200,
        queue: false
    });
    $(".quote-box").animate({
        backgroundColor: colors[rnd2]
    }, {
        duration: 200,
        queue: false
    });
    $(".button").animate({
        color: colors[rnd2]
    }, {
        duration: 200,
        queue: false
    });
    $(".button a").animate({
        color: colors[rnd2]
    }, {
        duration: 200,
        queue: false
    });
}
// Loads a random quote on page load
$(document).ready(changeQuote);
$(document).ready(changeColors);
// Animate new quote button on mouse enter and leave
$("#newQuote").mouseenter(function() {
    $(this).animate({
        width: "+=10px",
        height: "+=10px",
        paddingTop: "+=6px"
    });
}).mouseleave(function() {
    $(this).animate({
        width: "-=10px",
        height: "-=10px",
        paddingTop: "-=6px"
    });
});
// Click function for new quote button, changes opacity and calls the changeQuote function
$("#newQuote").click(function() {
    $(this).animate({
        opacity: '1'
    });
    changeQuote();
    changeColors();
    $(this).animate({
        opacity: '0.7'
    });

});
// Mouse enter and leave animations for twitter button
$("#twitterButton").mouseenter(function() {
    $(this).animate({
        width: "+=150px",
        height: "+=10px",
        paddingTop: "+=6px"
    });
    $("#tweetQuote").fadeIn({
        queue: true,
        duration: 'slow'
    });
}).mouseleave(function() {
    $(this).animate({
        width: "-=150px",
        height: "-=10px",
        paddingTop: "-=6px"
    });
    $("#tweetQuote").fadeOut("slow");
});
// Click opacity effects for twitter button
$("#twitterButton").click(function() {
    $(this).animate({
        opacity: '1'
    });
    $(this).animate({
        opacity: '0.7'
    });
});
