let cards = document.querySelectorAll(".panel");
let previous = document.querySelector(".active");

for (let card of cards) {
    card.addEventListener("mouseover", (e) => {
        console.log(`Previous panel: ${previous.querySelector('.img-text').innerText}`);
        previous.className = "panel";
        card.className = "panel active";
        previous = card;
    });
}
