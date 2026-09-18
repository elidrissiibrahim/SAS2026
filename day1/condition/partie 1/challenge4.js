//Challenge 4 : Livraison gratuite
let prompt=require('prompt-sync')();
let monton=+prompt("Montant de la commande : ");
if (monton >= 500)
{
    console.log("Livraison gratuite");
    console.log("Total à payer : ",monton);
}
else
    { 
    console.log("Livraison : 40 dh");
    console.log("total à payer : ",monton+40);
    }