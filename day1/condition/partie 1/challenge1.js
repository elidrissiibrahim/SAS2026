//Challenge 1 : Vérifier l'âge
let prompt =require("prompt-sync")();
let age = prompt("age :");
if (age >= 18 )
{
    console.log("Accès autorisé");
}
else 
{
    console.log("Accès refusé");
}