//Challenge 4 : Compteur de Voyelles
function compterVoyelles(chaine)
{
    let count = 0;
    for (let i = 0; i <= chaine.length ; i++)
    {
        if (chaine[i] === "a" || chaine[i] ==="e" || chaine[i] ==="u" || chaine[i]==="i" || chaine[i]==="o" || chaine[i]==="y")
        {
            count++;
        }
    }
    return count;
}
console.log(compterVoyelles("aaabbbrahiiimm"))