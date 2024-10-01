function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function indovinaNumero(){
    let tentativi = 5
    let numeroCasuale = getRandomInt(0,100)
    let indovina
    let i = 0
    let j = 0 

    alert("Indovina il numero tra 0 e 100")
    alert("Hai " + tentativi + "tentativi")

    while(i < tentativi && j === 0){
        indovina = parseInt(prompt("Tentativo "+ (i + 1) +":"))

        if(indovina === numeroCasuale){
            j = 1;
        } 
        else if (indovina < numeroCasuale) {
            console.log("Troppo grande")
        } else {
            console.log("Troppo piccolo")
        }

        i++
    }


    if(j === 1){
        console.log("Bravo, hai vinto")
    }
    else{
        console.log("Mi dispiace, hai finito tutti i tentativi. Il numero era " + numeroCasuale)
    }
}