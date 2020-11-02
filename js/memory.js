// cria uma variável com todos os elementos com a class='card'
const cards = document.querySelectorAll('.memory-card');

// var para saber se a carta foi virada
let hasFlippedCard = false;

// var para 'travar' o board enquanto duas cartas ainda estão viradas
let lockBoard = false;

// var para a primeira e a segunda cartas viradas
let firstCard, secondCard;

let tries = 0;
let achou = 0;

// função para adicionar a classe (flip) a um elemento
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    // quando virar a primeira carta
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    // hasFlippedCard = false;

    tries++;
    checkForMatch();
}

/* função para verificar o 'acerto' -> ternary operator:
1. define a condição (FirstCard === SecondCard)
2. ação para true (disableCards)
3. ação para false (unFlipCards)
*/
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unFlipCards();
}

// efeito 'simples' quando acertar & desabilita o 'click' nas cartas
function disableCards() {
    achou++;
    firstCard.classList.add('match');
    secondCard.classList.add('match');
    setTimeout(() => {
        firstCard.classList.remove('match');
        firstCard.classList.add('rematch');
        secondCard.classList.remove('match');
        secondCard.classList.add('rematch');
        resetBoard();
        if (achou==6) acabou();
    }, 500);
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// função para 'desvirar' as cartas
function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        // lockBoard = false;
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// shuffle 'simples', para listas pequenas e simples
(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 6);
        card.style.order = ramdomPos;
    });
})();

function restartMemory() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 6);
        card.style.order = ramdomPos;
    });
    cards.forEach(card => card.classList.remove('flip','rematch'));
    resetBoard();
    tries = 0;
    achou = 0;
    document.getElementById('teste').style.display = "none";
    cards.forEach(card => card.addEventListener('click', flipCard));
}

function acabou() {
    document.getElementById('teste').style.display = "flex";
    document.getElementById('restart').innerHTML = "VOCÊ USOU " + tries + " TENTATIVAS!";
}

// para cada elemento (card) do deck, adiciona o flip quando 'clicar' 
cards.forEach(card => card.addEventListener('click', flipCard));