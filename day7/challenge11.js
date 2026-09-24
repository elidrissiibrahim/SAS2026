//Recherche linéaire d'un utilisateur par ID
let utilisateurs = [
  { id: 1, nom: "Sara" },
  { id: 2, nom: "Omar" },
  { id: 3, nom: "Nadia" },
  { id: 4, nom: "Yassine" }
];
function cherchebyid(byid)
{
    let is ;
    for(let i = 0 ; i < utilisateurs.length ; i++)
    {
        if (utilisateurs[i].id == byid)
        {
            is = utilisateurs[i]
        }
    }
    return is;
}
console.log(cherchebyid(4))