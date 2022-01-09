const quoteBank = [
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    }, {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    }, {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
    }, {
        quote: "When the going gets tough, the tough get going.",
        author: "Joe Kennedy",
    }, {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    }, {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    }, {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
    }, {
        quote: "Do what you can, with what you have, where you are.",
        author: "Teddy Roosevelt",
    }, {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
    }, {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    }, {
        quote: "I have no special talent. I am only passionately curious.",
        author: "Albert Einstein",
    }, {
        quote: "Life would be tragic if it weren’t funny.",
        author: "Stephen Hawking"
    }

]

window.onload = init;
function init() {
    generateQuote();
};

function generateQuote() {
    let quoteSize = quoteBank.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = quoteBank[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22It%20is%20never%20too%20late%20to%20be%20what%20you%20might%20have%20been.%22%20George%20Eliot"

    document.getElementById("tweet-quote") = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}

