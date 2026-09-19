let prompt = require ('prompt-sync')();
let number ;
let somme = 0;
let i = 0;
while(number !== 0)
{
    number =+ prompt("saisir des nombres : ");
    somme += number;
    i++;
}
console.log("Nombre de valeurs : ",i - 1);
console.log("Somme : ",somme);