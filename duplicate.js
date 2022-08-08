function removeDuplicate (names){
    const unique = [];
    for(i = 0; i < names.length; i++){
        const element = names[i];
        if(unique.includes(element) == false){
            unique.push(element);
        }
    }
    return unique;
}
const names = ["Saqib", "Soleh", "Saad", "Aisha", "Saqib", "Mariam", "Saad"];
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);