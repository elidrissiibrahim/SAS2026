//Challenge 4 : Table de multiplication
let prompt= require('prompt-sync')();
let x = prompt("entrer un nomber : ");
for (let i = 1 ; i <= 10 ; i++)
{
    console.log(x+"*"+i+"=",x*i);
}