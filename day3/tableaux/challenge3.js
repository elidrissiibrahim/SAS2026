//Challenge 3 : Recherche du Maximum
let tab=[12,98,10,40];
max = tab[0];
for (let i = 0; i < tab.length ; i++)
{
    if(tab[i] > max)
        max = tab[i];
}
console.log(max);