function plusgrandmot(chain) {
    let mot = "";
    let divmot = [];
   for (let i = 0; i < chain.length; i++) {
        if (chain[i] != " ") {
            mot += chain[i]
        }
        if (chain[i] == " " ) {
            divmot[divmot.length] = mot;
            mot = ""
        }

    }
    return divmot;
}
console.log(plusgrandmot("java est un langage de programmation"))