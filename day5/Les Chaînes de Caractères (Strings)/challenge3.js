//Challenge 3 : Inverseur de Chaîne
function inverserChaine(chaine)
{
    let reverchaine ="";
    for (let i = chaine.length-1 ; i >= 0 ; i--)
    {
        reverchaine += chaine[i];
    }
    return reverchaine;
}
console.log(inverserChaine("brahim"))