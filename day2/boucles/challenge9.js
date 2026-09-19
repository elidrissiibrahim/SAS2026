let prompt=require ('prompt-sync')();
let base = prompt("base : ");
let exposant=prompt("Exposant :");
let count = 1;
while (exposant !== 0)
{
    count = base * count ;
    exposant--;
}
console.log(count);