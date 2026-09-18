//Challenge 8 : Calculatrice simple
let prompt = require ('prompt-sync')();
let pre=+ prompt("entre votre premier number : ");
let oper= prompt("choise une opertateur ==> + , - , / , * : ");
let dexn=+ prompt("entre votre dexiem number : ");

switch (oper)
{
    case "+":
        console.log("resultat :",pre+dexn);
        break;
    case "-":
        console.log("resultat :",pre-dexn);
        break;
    case "/":
        console.log("resultat :",pre/dexn);
        break;
    case "*":
        console.log("resultat :",pre*dexn);
        break;
    default :
        console.log("Opérateur invalide.");
}