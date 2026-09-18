//Challenge 3 : Vérification d'une note
let prompt= require('prompt-sync')();
let note = prompt ("note :");
if (note < 0 || note > 20 )
{
    console.log("une note invalid");
}
else 
    if (note >= 10 )
    {
        console.log("Admis");
    }
    else 
        console.log("Non admis");