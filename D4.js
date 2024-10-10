/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let l1 = 5;
let l2 = 3;

function area(l1, l2) {
  return l1 * l2;
}

console.log("L'area è: " + area(l1, l2));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum() {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);

  if (num1 === num2) {
    return 3 * (num1 + num2);
  } else {
    return num1 + num2;
  }
}
console.log(crazySum());

/* SCRIVI QUI LA TUA RISPOSTA */

// Esempio di utilizzo

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  let diff = Math.abs(num - 19);
  if (num > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
console.log(crazyDiff(20));
console.log(crazyDiff(25));
console.log(crazyDiff(9));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  return (n > 20 && n <= 100) || n === 400;
}
console.log(boundary(100));
console.log(boundary(400));
console.log(boundary(10));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(EPICODE) {
  const parola = [" EPICODE"];
  if (EPICODE.startsWith(parola)) {
    return EPICODE;
  } else {
    return EPICODE + parola;
  }
}
console.log(epify("Corso"));
console.log(epify(""));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num <= 0) {
    return "Numero deve essere positivo";
  }
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(10));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
