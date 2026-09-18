//Challenge 2 : Afficher les nombres pairs
let prompt=require('prompt-sync')();
let N =+ prompt("N : ");
for (let i = 1 ; i <= N ; i++)
{
    if( i%2 == 0)
    {
        console.log(i);
    }
}