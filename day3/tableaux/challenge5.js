//Challenge 5 : Recherche d'Élément (Simulation de includes)
let prompt = require("prompt-sync")();
let element = prompt("element :")
let tab = ["bi","na","si"];
let intab = false ;
for(let i= 0; i < tab.length ; i++)
{
    if (tab[i] === element)
    {
        intab = true ;
        break;
    }
}   
console.log(intab);