//Challenge 9 : Générateur de Compteur Indépendant (Closure)
function creerCompteur(valeurintial = 0) {
    let count = valeurintial;
    function MonCompteur() {
        count++;
        return count;
    }
    return MonCompteur;
}
let MonCompteur = creerCompteur(10);
console.log(MonCompteur())
console.log(MonCompteur())
console.log(MonCompteur())
console.log(MonCompteur())
