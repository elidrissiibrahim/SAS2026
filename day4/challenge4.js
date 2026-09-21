//Challenge 4 : Salutation Personnalisée avec Valeur par Défaut
function saluerClient(nom , titre)
{
    if (titre == undefined)
    titre="client";
    let bonjour = `Bonjour ${titre} ${nom}`
    return bonjour;
}
console.log(saluerClient("brahim","president"));
