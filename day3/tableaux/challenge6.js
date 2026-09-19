//Inversion Manuelle (Simulation de reverse)
let tab=[1,2,4,5];
let tab2=[];
for(let i =tab.length-1 ; i >= 0 ; i--)
{
    tab2[tab2.length] = tab[i];
}
console.log("first tableau  :",tab)
console.log("revers tableau :",tab2)