const quoteBank = [
    “The best is yet to be,
    Try to be a rainbow in someone's cloud,
    Do good and good will come to you,
    A positive mindset brings positive things,
    Positivity always wins
    When things go wrong, don't go with them.,
    Live life to the fullest and focus on the positive,
    Keep looking up"
];
window.onload = init;
function init() {
    generateQuote();
};

function generateQuote() {
    console.log("Quote Generated");
    document.getElementById("text").innerText = "Developer";
    document.getElementById("author").innerText = "The Author";
}

