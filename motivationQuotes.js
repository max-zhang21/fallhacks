const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.getElementById("newQuoteButton");
// random quote function
function randomQuote(){
    // fetching random quotes from the API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
    });
}
// quoteBtn.addEventListener("click", randomQuote);

// This code runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Click the button
    document.getElementById("newQuoteButton").click(); 
  });
