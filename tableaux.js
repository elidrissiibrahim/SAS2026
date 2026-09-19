let tab = [10,3,5,1,2,7,15];
tabimpaire=[];
tabdiv3=[];
for(let i = 0; i < tab.length ;i++)
{
    if (tab[i] % 2 !== 0)
    {
        //tabimpaire[tabimpaire.length]=tab[i];
        tabimpaire.push(tab[i])
    }
    if (tab[i] % 3 === 0)
    {
        tabdiv3[tabdiv3.length]=tab[i];
    }
}
console.log(tabimpaire);
console.log(tabdiv3);
if (tabdiv3.length > tabimpaire.length)
    console.log("les diviseur de 3 est plus que les impair ");
else 
    console.log("les impair plus que les multiple de 3 ");
