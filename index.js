const quoteBank = [
    {
        quote: "try to be a rainbow in someone's cloud, do good and good will come to you, a positive mindset brings positive things, positivity always wins when things go wrong, don't go with them, live life to the fullest and focus on the positive, keep looking up.",
        author: ""
    }

]

window.onload = init;
function init() {
    generateQuote();
};

function generateQuote() {
    console.log("Quote Generated");
    document.getElementById("text").innerText = "Developer";
    document.getElementById("author").innerText = "The Author";
}

