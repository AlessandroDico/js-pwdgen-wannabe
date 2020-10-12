// document.writeln('hello world');

var nome_utente = prompt("qual'è il tuo nome?");

console.log(nome_utente);

var cognome_utente = prompt("qual'è il tuo cognome?");

console.log(cognome_utente);

var colore_preferito = prompt("qual'è il tuo colore preferito?");

console.log(colore_preferito);

var password_perfetta = nome_utente + cognome_utente + colore_preferito + "20";

console.log(password_perfetta);

document.getElementById('password_very_sure').innerHTML = password_perfetta;
