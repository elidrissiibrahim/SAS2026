//Challenge 2 : Compteur d'Occurrences d'un Caractère
function compterLettre(chaine, lettre)
{
    let i = 0;
    let countletter = 0;
    while(chaine[i])
    {
        if(chaine[i] === lettre)
        {
            countletter += 1;
        }
        i++;
    }
    return countletter;
}
console.log(compterLettre("braaaaaaaahim","a"));