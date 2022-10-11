// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



// Strumenti 
// Prompt 
// Array
// Array + ciclo 
// if / if else 
// insertAdjacentHTML 

// Operazioni da eseguire:

// Utiliziamo il comando prompt per chiedere la mail all'utente
const emailToInsert = prompt(`Inserisci la tua mail!`)
// console.log(emailToInsert);


// Successivamente creiamo una lista con le varie mail 

const registeredMails = [
    `franco87@gmail.com`,
    `pino21@gmail.com`,
    `ansaldi10@gmail.com`,
    `rafaleao@gmail.com`,
    `roberto97@gmail.com`,
]
let isValid = false;

// Attravesro Array + ciclo visioniamo se la mail è presente nella lista 

for (let i = 0; i < registeredMails.length; i++) {
    const mail = registeredMails[i];
    // console.log(mail);
    
    // verifichiamo se la mail corrisponde 
    if (mail === emailToInsert){
        isValid = true
        // Stampiamo mail valida 
    }
    
}
console.log(isValid);

//Infine stampiamo sul foglio HTML il risultato 

const pElement = document.querySelector(`p`)

pElement.innerHTML = isValid;

// selezioniamo con il querySelector



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?




