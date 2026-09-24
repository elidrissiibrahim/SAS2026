//Challenge 6 : Duplication de Chaîne (Simulation de repeat)
function repeterChaine(chaine, fois)
{
    let repchaine = "";
    for(let i =1 ; i <= fois ; i++)
    {
        for(let i = 0; i <= chaine.length-1 ; i++)
        {
            repchaine += chaine[i];
        }
    }
    return repchaine;

}
console.log(repeterChaine("bra",3));