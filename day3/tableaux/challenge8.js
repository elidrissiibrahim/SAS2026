//Challenge 8 : Supprimer les Doublons Manuellement

let tab=[1, 2, 2, 3, 4, 4, 1];
let tabfiltrer =[];
for(let i = 0; i < tab.length; i++)
{

    for(let j = i+1 ; j < tab.length;j++)
    {
            if (tab[i] == tab[j])
        continue;
    }
  tabfiltrer[tabfiltrer.length] = tab[i]; 
}
console.log(tabfiltrer);