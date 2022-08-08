function woodCalculator (chairs, tables, beds){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const woodsForChair = chairs * perChairWood;
    const woodsForTable = tables * perTableWood;
    const woodsForBed = beds * perBedWood;

    return {woodsForChair, woodsForTable, woodsForBed};
}
const chairs = 10;
const tables = 2;
const beds = 1;

const woodsForFurniture = woodCalculator(chairs, tables, beds);
console.log(woodsForFurniture);