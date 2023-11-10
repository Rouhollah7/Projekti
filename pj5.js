document.addEventListener("DOMContentLoaded", function () {
    const symbols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const cards = symbols.concat(symbols);
    let flippedCards = [];
    let matchedCards = [];

    function initializeBoard() {
        const shuffledCards = shuffleArray(cards);
        const container = document.getElementById("memoryGameContainer");

        for (let card of shuffledCards) {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.dataset.value = card;
            cardElement.textContent = '';
            cardElement.addEventListener("click", flipCard);
            container.appendChild(cardElement);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function flipCard() {
        const card = this;
        if (flippedCards.length < 2 && !flippedCards.includes(card)) {
            flippedCards.push(card);
            card.textContent = card.dataset.value;

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.value === card2.dataset.value) {
            matchedCards.push(card1, card2);
            if (matchedCards.length === cards.length) {
                alert("Onneksi olkoon! Suoritit pelin!");
            }
        } else {
            card1.textContent = '?';
            card2.textContent = '?';
        }

        flippedCards = [];
    }

    initializeBoard();
});
