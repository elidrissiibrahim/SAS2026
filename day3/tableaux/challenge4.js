//Challenge 4 : Ajout à la Fin (Simulation de push)
let prompt = require ("prompt-sync")();
let tab=[45,20,30];
let add =+ prompt("enter une autre element : ");
let newtab=[];
for (let i =0; i <= tab.length ; i++)
{   
    if (i === tab.length)
        newtab [i]= add ;
    else 
        newtab[i] = tab[i];
}
console.log(newtab)