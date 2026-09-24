//Challenge 5 : Test de Palindrome
function estPalindrome(chaine)
{
    let palindrome = false ;
    reverchaine = "";
        for (let i = chaine.length - 1; i >= 0; i--) 
        {
            reverchaine += chaine[i];
        }
        for (let j = 0; chaine[j] ; j++)
        {
                if (chaine[j] === reverchaine[j])
                {
                    palindrome = true ;
                }
        }
        if (palindrome == true)
            return palindrome;
        else
            return palindrome;
            
}
console.log(estPalindrome("lol"))
console.log(estPalindrome("abasse"))