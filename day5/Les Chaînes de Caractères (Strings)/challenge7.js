//Challenge 7 : Remplacement Manuel d'un Caractère

function remplacerCaractere(chaine, ancien, nouveau)
{
    let nvchaine = "";
    for (let i = 0 ;i < chaine.length ; i++)
    {
        if (chaine[i] === ancien)
        {
        nvchaine += nouveau;
        }
    else {
        nvchaine += chaine[i];
    }}
    return nvchaine;
}
console.log(remplacerCaractere("banana", "a", "o"))