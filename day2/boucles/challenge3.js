//Challenge 3 : Somme des nombres
let prompt=require('prompt-sync')();
let N =+ prompt("N : ");
let sum=0;
for(let i = 0; i <= N ; i++)
{
        sum = sum + i;
}
console.log("Somme : ",sum);