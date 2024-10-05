let color = ["green", "black", "black/white"];

let nameList = ["Joker", "Bane", "Venom"];

let heroes = ["Batman, Superman, IronMan"]

console.log(color, " - This is the color array");
console.log(nameList, " - this is the nameList array");
console.log(heroes, " - Superheroes are boring");

let numbers = Array.of (8)

let moreNumbers = Array.of(8,10,12,14,16,18)

console.log(numbers, "- this is array of 8");
console.log(moreNumbers, "- this is an array of MoreNumber in sequence of +2");

let chars = Array.from("Boom");

const set = new Set (['molded', 'by', 'darkness']);

let unique = Array.from(set);

console.log(chars, "- this is chars array");
console.log(unique, "- this is unique array");

let arrayLenght = new Array(6);

console.log(arrayLenght, "- this is what we have in the array");
console.log(arrayLenght.length, "- this is the lenght of the array")

let Villains = ["Joker", "Bane,", "Venom"];
let lastVillain = Villains.pop();

console.log(lastVillain, "- last villain");
console.log(Villains, "- Villains array");

let villains = ["Frieza", "Cell"];
villains.push("Vegeta");

console.log(villains);

let VillainS = ["Doctor Doom", "Thanos", "Magneto", "Knull", "Ultron"];
let Doctor = VillainS.slice(1);

console.log(Doctor);

let colors = ["silver", "black/white", "green", "white", "black", "gold"];

const iterator = colors.entries();
for (let e of iterator) {
    console.log(e); // e is an array [index, value]
}

let Colors = ["silver", "black/white", "green"];
let [firstColor, secondColor] = colors;

console.log(firstColor); // Outputs: "silver"
console.log(secondColor); // Outputs: "black/white"