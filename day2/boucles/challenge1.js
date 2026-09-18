//Challenge 1 : Compter les participants
let prompt=require('prompt-sync')();
let number = prompt("Nombre de participants : ");
for (let i =1 ; i <= number ; i++)
{
    console.log("Participant ",i);
}