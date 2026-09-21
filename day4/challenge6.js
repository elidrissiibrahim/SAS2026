//Challenge 6 : Validateur de Mot de Passe
let prompt = require ('prompt-sync')();
function verifierMotDePasse(motdepasse)
{
if (motdepasse.length >= 8 && motdepasse.includes("@"))
{
    return true ;
}
else 
    return false;
}
let mot = prompt ("enter une mot de passe :");
console.log(verifierMotDePasse(mot));