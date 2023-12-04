const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne = null;
let cardTwo = null;
let disableDeck = false;

function flipCard({ target: clickedCard }) {
    if (!disableDeck && !clickedCard.classList.contains("flip")) {
        clickedCard.classList.add("flip");

        if (!cardOne) {
            cardOne = clickedCard;

            setTimeout(() => {
                if (cardOne) {
                    cardOne.classList.remove("flip");
                    cardOne = null;
                }
            }, 700);
        } else {
            cardTwo = clickedCard;
            disableDeck = true;

            let cardOneImg = cardOne.querySelector(".back-view img").src,
                cardTwoImg = cardTwo.querySelector(".back-view img").src;

            matchCards(cardOneImg, cardTwoImg);
        }
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched === 8) {
            setTimeout(() => {
                shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = null;
        disableDeck = false;
    } else {
        setTimeout(() => {
            cardOne.classList.remove("flip");
            cardTwo.classList.remove("flip");
            cardOne = cardTwo = null;
            disableDeck = false;
        }, 1200);
    }
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = null;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, i) => {
        card.classList.remove("flip", "shake");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
