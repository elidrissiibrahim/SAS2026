//Challenge 5 : Le Somateur Universel (Rest Parameter)
let prompt = require ('prompt-sync')();
let exit=[];
function additionnerTout(...arg)
{
 let Somme = 0;
for(let i =0; i <arg.length ;i++)
    {
        Somme += arg[i];
    }
    return Somme;
     /*console.log(arg)
    let sum = arg.reduce((i,total) => total + i , 0)
    return sum;*/

}
    do {
      exit[exit.length] =+ prompt("enter :")
    }
    while(exit[exit.length - 1] != 0);
    console.log (additionnerTout(...exit));