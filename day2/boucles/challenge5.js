//Challenge 5 : Compter les multiples
let prompt = require('prompt-sync')();
let n =+ prompt("nombre N :") ;
let x =+ prompt("nombre X :");
let cont = 0;
let sum = 0;

for (i= 1;  i*x <= n; i++)
{
    cont = cont + x;
     console.log(cont); 
     sum++;
     
}
console.log("total de multiples trouvés",sum);