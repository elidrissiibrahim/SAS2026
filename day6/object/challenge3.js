//Challenge 03 — Product
let product={
    name :"clavie ",
    price :300,
    category :"informatique",
    quantity :30,
    available : true 
}
console.log("name :",product.name)
console.log("price :",product.price," dh")
console.log("category : ",product.category)
if (product.quantity > 0)
{
console.log("is avaliabel : ",product.available)
}
else
{
product.available = false;
console.log("is available ",product.available)
}
let total = product.price * product.quantity;
console.log("total inventory price :",total,"dh");