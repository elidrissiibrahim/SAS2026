let prompt= require('prompt-sync')();
let n =+ prompt("entre number d'articel : ");
let total = 0;
let promo = 0;
let produit = 125 ;
if (n === 1)
{
    console.log("total = 125 dh");
}
else if (n > 1)
{
    for(let i = 1 ; i <= n ; i++)
    {
        r=produit+(produit-((produit*promo)/100)); 
        total+=r;
        promo=+2;
    }
    console.log(total);
}
else
    console.log("tu pas d articel !! ");
