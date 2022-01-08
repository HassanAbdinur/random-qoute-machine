window.onload = init;
function init() {
    generateQuote();
};

function generateQuote() {
    console.log("Quote Generated");
    document.getElementById("text").innerText = "Developer";
    document.getElementById("author").innerText = "The Author";
}

