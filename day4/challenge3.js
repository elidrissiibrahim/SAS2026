//Challenge 3 : Générateur d'Email Professionnel
function genererEmail(nom , prenom)
{
   let email = `${prenom.toLowerCase()}.${nom.toLowerCase()}@gmail.com`
    return email;
}
console.log(genererEmail("elidrissi","Ibrahim"));