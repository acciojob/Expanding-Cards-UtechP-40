//your JS code here. If required.
let cards = document.querySelectorAll(".panel")
let previous = document.querySelector(".active")
let first = previous;
for(let card of cards){
    card.addEventListener("mouseover",(e)=>{
        previous.className = "panel"
        console.log("hello")
        card.className = "panel active"
        previous=card;
    })
}

