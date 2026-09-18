let prompt = require ('prompt-sync')();
let miss = prompt ("number des missions :");
let i = 1;
let scor= 100;
while (i <= miss)
{
    console.log("Mission "+i+" → Score :",scor);
    scor = scor + 100;
    i++;
}