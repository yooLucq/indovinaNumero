function getRandomInt(min = 1, max = 100){
    let num = Math.random()
    num = num * (max - min) + min
    return Math.floor(num)
}

function sanitize(Var){
    let san
    if(!isNaN(Var)) {
        san = parseInt(Var.trim());
    }
    else {
        san = NaN;
    }
    return san
}

function handleClick(event) {
    let input = document.querySelector("#guess").value;
    numeroInserito = sanitize(input);

    if (isNaN(numeroInserito)) {
        console.log("Inserisci un numero valido")
    } else {
        if (numeroInserito > numeroCasuale) {
            console.log("Il numero '" + numeroInserito + "' è troppo grande")
            tentativi += 1
        } else if (numeroInserito < numeroCasuale) {
            console.log("Il numero '" + numeroInserito + "' è troppo piccolo")
            tentativi += 1
        } else if (numeroInserito === numeroCasuale) {
            console.log("Bravo, hai vinto!")
            indovinato = true
            document.querySelector("#guess").disabled = true;
            document.querySelector("#guessBtn").disabled = true;
        }
    }
    if (tentativi === 5 && !indovinato) {
        console.log("Hai esaurito i tentativi, hai perso!")
        document.querySelector("#guess").disabled = true;
        document.querySelector("#guessBtn").disabled = true;
    }
}

let tentativi = 0
let numeroCasuale = getRandomInt()
let numeroInserito
let indovinato = false
let userField = document.querySelector("#guess")
let btn = document.querySelector("#guessBtn")
btn.addEventListener("click", handleClick)