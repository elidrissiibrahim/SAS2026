//Challenge 2 : Positif, négatif ou zéro
let prompt= require('prompt-sync')();
let nbr =+ prompt("un nombre entier : ");
if (nbr > 0)
{
    console.log("Le nombre est positif.");
}
else if (nbr < 0)
{
    console.log("Le nombre est négatif.");
}
else 
    console.log("Le nombre est égal à zéro.");