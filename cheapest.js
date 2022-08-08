function cheapestPhone (phones){
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++){
        const element = phones[i];
        if(element.price < cheapest.price){
            cheapest = element;
        }
    }
    return cheapest;
}
const phones = [
    {name: "samsung", camera: 12, storage: "32gb", price : 36000, color: "silver"},
    {name: "walton", camera: 10, storage: "32gb", price : 22000, color: "black"},
    {name: "iphone", camera: 7, storage: "32gb", price : 82000, color: "golden"},
    {name: "xaomi", camera: 17, storage: "32gb", price : 51000, color: "red"},
    {name: "oppo", camera: 25, storage: "32gb", price : 20000, color: "blue"},
    {name: "nokia", camera: 6, storage: "32gb", price : 44000, color: "gray"},
    {name: "htc", camera: 12, storage: "32gb", price : 62000, color: "off white"}
]
console.log(cheapestPhone(phones));