function totalCost (products){
    let sum = 0;
    for (i = 0; i < products.length; i++){
        const element = products[i];
        const total = element.price * element.quantity;
        sum += total;
    }
    return sum;
}
const products = [
    {name: "shoe", price: 1200, quantity: 3},
    {name: "shirt", price: 2200, quantity: 4},
    {name: "pant", price: 3700, quantity: 5},
    {name: "belt", price: 600, quantity: 2},
];
console.log(totalCost(products));