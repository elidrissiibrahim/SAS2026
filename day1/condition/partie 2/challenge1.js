//Challenge 6 : Menu d'une application
let prompt = require('prompt-sync')();
console.log(
    "1 → Afficher le profil\n",
"2 → Afficher les paramètres\n",
"3 → Afficher les notifications\n",
"4 → Se déconnecter"
    );
let menu =+prompt("L'utilisateur choisit une option :");
switch(menu)
{
    case 1:
        console.log("PROFIL");
       break ;
    case 2:
        console.log("Ouverture des paramètres...");
        break;
    case 3:
        console.log("Ouverture des notifications...");
        break;
    case 4:
        console.log("GOOD BY");
        break;
    default:
        console.log("Choix invalide.");
}