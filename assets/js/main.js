/*===============================================
=           CODICE JAVASCRIPT COGNOMI           =
=================================================*/

/* Lista Cognomi
1- Chiedere all'utente il cognome
2. Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
3. Stampa la lista ordinata alfabeticamente
4. Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

// Chiediamo il cognome all'utente e lo inseriamo in una variabile JS
var userSurname = prompt(String("Qual è il tuo cognome?"));

// console.log(userSurname);


// Creiamo la variabile per l'array
var listSurname = [
    "Bianchi", 
    "Rossi", 
    "Duziani", 
    "Balsano", 
    "Verdi"
];

// console.log(listSurname);


// Aggiungiamo il cognome dell'utente all'array
listSurname.push(userSurname);

// console.log(listSurname);


// Ordiniamo l'array alfabeticamente A-Z
listSurname.sort();

// console.log(listSurname);


// Creiamo un ciclo for per leggere la lista dei cognomi e stamparla nell'HTML
for (var i = 0; i < listSurname.length; i++) {
    // inseriamo l'elemento letto dal ciclo nella variabile item 
    var item = listSurname[i];  
    // creiamo una variabile per sovrascrivere l'HTML dell'ul che inizialmente è vuoto   
    var listContent = document.getElementById("cognomi").innerHTML; 
    /* risovrascriviamo l'HTML della ul tenendo la variabile listContent e generiamo i tag <li> e </li> 
    da inserire nell'HTML per creare la lista */
    document.getElementById("cognomi").innerHTML = listContent + "<li>" + item + "</li>";  
}

// Inseriamo un alert per segnalare la posizione nell'array del nuovo utente alias userSurname
alert("La posizione nell'indice del nuovo utente è la numero " + listSurname.indexOf(userSurname) + ".");







