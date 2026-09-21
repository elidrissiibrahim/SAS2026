const format = (val) => val +"DH";

function convertirMontant(montant, taux , format)
{
    let reselt = montant * taux ;
    return format(reselt);
}
console.log(convertirMontant(100 , 10.5 ,format));