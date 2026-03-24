function revealGift(id, correctAnswer) {
    const inputElement = document.getElementById(`input-${id}`);
    const resultElement = document.getElementById(`result-${id}`);
    const cardElement = document.getElementById(`card-${id}`);
    const buttonElement = cardElement.querySelector('button');

    const userAnswer = inputElement.value.toLowerCase().trim();

    // Kontrola odpovědi (ignoruje diakritiku pro jednodušší zadávání)
    if (userAnswer === correctAnswer.toLowerCase()) {
        // Schováme vstup a tlačítko
        inputElement.style.display = 'none';
        buttonElement.style.display = 'none';
        
        // Ukážeme výsledek a změníme styl karty
        resultElement.style.display = 'block';
        cardElement.classList.add('revealed');
    } else {
        alert("To není ono, zkus to znovu, lásko! ❤️");
    }
}
// Pomocná funkce pro konfety a zobrazení výsledku
function win(id) {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff85a2', '#d63384', '#ffccd5']
    });
    document.getElementById(`result-${id}`).style.display = 'block';
}

// 1. Úkol: Srdce
let clicks = 0;
function heartClick() {
    clicks++;
    if (clicks === 5) {
        document.getElementById('heart-button').innerHTML = '🌸';
        win(1);
    }
}

// 2. Úkol: Křížovka
function checkCrossword() {
    const word = document.getElementById('c1').value + 
                 document.getElementById('c2').value + 
                 document.getElementById('c3').value + 
                 document.getElementById('c4').value;
    if (word.toLowerCase() === 'kone') {
        win(2);
    } else {
        alert("Zkus to slovo poskládat znovu! 🐎");
    }
}

// 3. Úkol: Tlačítka
function correct(id) {
    win(id);
}
function wrong() {
    alert("To v našem vztahu nechceme! ❤️");
}

// 4. Úkol: Bludiště
function resetMaze() {
    // Tady by se dalo přidat varování, pokud vyjede z cesty
}

// 5. Úkol: Finále
function checkFinal() {
    const val = document.getElementById('input-5').value.toLowerCase();
    if (val.includes('uzijeme') || val.includes('užijeme')) {
        win(5);
    } else {
        alert("Skoro! Zkus třeba 'užijeme'.");
    }
}