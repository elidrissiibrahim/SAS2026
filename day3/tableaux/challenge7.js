//Challenge 7 : Filtrage Manuel des Nombres Pairs
let tab = [2,3,4,5,6, 10];
let tab2 = [];
for (let i = 0; i < tab.length;i++)
{
    if (tab[i] %2 === 0)
    {
        tab2[tab2.length]=tab[i]
    }
}
console.log(tab2)