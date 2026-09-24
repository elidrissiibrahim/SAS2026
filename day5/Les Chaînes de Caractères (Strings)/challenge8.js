//Challenge 8 : Extraction Manuelle de Sous-chaîne (Simulation de slice)
function extraireChaine(chaine, debut, fin)
{
    let nevchaine="";
    for (let i = debut; i < fin ; i++)
    {
        nevchaine += chaine[i];
    }
    return nevchaine;
}
console.log(extraireChaine("JavaScript", 0, 4));