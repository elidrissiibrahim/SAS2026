//Challenge 2 : Calculateur de Somme
let prompt = require ('prompt-sync')(); 
let summe= 0;
let tab = [10,15,20];
for (let i = 0; i < tab.length ; i++)
{
    summe+=tab[i];
}
console.log(summe);