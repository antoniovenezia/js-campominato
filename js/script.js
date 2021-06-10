/*Consegna Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri 
casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, o in pseudo codice, come abbiamo visto oggi, dividiamo il lavoro in micro problemi. 
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i
dati giusti. Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino: Le validazioni e i controlli possiamo 
farli anche in un secondo momento.*/
//------------------------------------------------------------------------------------------------------------------------------






// PSEUDO CODICE:
//Ciclo for per generar 16 numeri con Math.random() tra 1(min) e 100(max);
//Questi 16 numeri devono essere pushati in un array "numRandomPc"; 
//Ma prima verificare che non siano uguali agli elementi già facenti parte dell'array.

//funzione per generare 1 numero casuale da 1 a 100:
function numRandom (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(numRandom(1, 100));

//ora il for per generarne 16, dunque un contatore:
//e pushare questi 16 numeri 1 alla volta nel loro array ma SOLO se non sono uguali ad un itemArray esistente;
var arrayPc = [];
console.log(arrayPc);

//con il ciclo for non è possibile verificare che gli items dell'array siano o no doppioni, dunque...
//ci vorrebbe un contatore che man mano lo verifichi...(while)

while (arrayPc.length < 16) {
    var i = 0;
    var itemArrayPc = numRandom(1, 100);
    if (itemArrayPc !== arrayPc[i]){
        arrayPc.push(itemArrayPc);
    }
    i++;
}


//Ora bisogna chiedere all’utente per (100 - arrayPc.lenght) volte di inserire un numero alla volta compreso tra 1 e 100 però che sia univoco:
// var arrayUser = [];

// while (arrayUser.length < (100 - arrayPc.length)) {
//     var i = 0;
//     var itemArrayUser = prompt("Inserisci un numero da 1 a 100");
//     if itemArrayUser

    
//     if (itemArrayUser !== arrayPc[i]){
//         document.getElementById("result").innerHTML = "Hai vinto!";
//     } else {
//         document.getElementById("result").innerHTML = "Hai perso!";
//     }
//     i++;
// }
var arrayUser = [];

while (arrayUser.length < (100 - arrayPc.length)) {
    var i = 0;
    var itemArrayUser = prompt("Scegli un numero da 1 a 100");
    if (itemArrayUser !== arrayPc[i]){
        arrayUser.push(itemArrayUser);
    } else {
        document.getElementById("result").innerHTML = "Hai perso!";
    }
    i++;
}



