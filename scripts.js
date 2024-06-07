

let FruitArray = ["apple", "pear", "banana", "mango", "orange"]


// If Statements

if (FruitArray.length == 3){
    console.log("Heyooo")
}
else if (FruitArray.length == 4){
    console.log("Hallihalløj")
}
else {
    console.log("WuptiDupti")
}



if (FruitArray[2] == "banana"){
    console.log(FruitArray[2])
}


//For Loops

for (let n in FruitArray){
    console.log(n)
}


for (let n of FruitArray){
    console.log(n)
}



for (let i = 0; i < FruitArray.length; i+=2) {
    console.log(i*2)
}


FruitArray.forEach(function(Fruits, index, array){
    console.log(Fruits,index, array);
})

//Push and Pop

FruitArray.push("coconut");

console.log(FruitArray);

FruitArray.pop();

console.log(FruitArray)


// Constructer Funktioner

function MadFordeler(navn, farve, type, rating, smag){
    this.navn = navn;
    this.farve = farve;
    this.type = type;
    this.rating = rating;
    this.smag = smag;
    this.ToString = function() {
        return (
            this.navn +
            "" +
            this.farve +
             "" + 
            this.type +
            "" + 
            this.rating + 
            "" +
            this.smag
        );
    }
}

const Mad1 = new MadFordeler("Blåbær","blå","bær", 7, "sødt");
const Mad2 = new MadFordeler("Københavnerstang", "gul", "is", 10, "sødt")

console.log(Mad1);
console.log(Mad2);

//Object Literal 

const fodbold = {
    farve: "Hvid",
    størlese: "Lille",
    Form: "Rund"
}
console.log(fodbold);

//Object Literal Metadata

let persons = ["Henrik", "Morten","Torben", "Ole" ]
let sport = ["Fodbold", "Basketbold", "Tennis", "Gymnastik"]

const meta = {
    NumberofProps: 2,
    props: [
    {name:"persons", type:"Array of strings" },
    {name:"sport", type:"Array of strings"}
    ]
}
console.log(meta);


// Sortering - Omvendt rækkefølge

let names = ["Hans", "Peter", "Henrik", "Jens", "Lars", "Ole"]

function invertArray(array) {
    let invertedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        invertedArray.push(array[i]);

    }
    return invertedArray;
}

console.log(invertArray(names));

//Sortering af Array

const teacherArray = ["Thomas", "Torill", "Mads", "Heine"]

teacherArray.sort();

console.log(teacherArray);

//Sortering efter array of objects

const objectArray = {
    objects: [
        {name: "Thomas", age: 42},
        {name: "Torill", age: 43},
        {name: "Mads", age: 36},
        {name: "Heine", age: 54}
    ]
}

objectArray.objects.sort(function(a,b){
return a.age - b.age
})

console.log(objectArray)

// Sortering efter array of strings

const stringArray = [
    [1, 30, 100],
    [5, 25, 74],
    [3, 16, 36],
    [13, 47, 85],
    [9, 32, 65]
];

stringArray.sort(function(a,b)
{
   return a[2] - b[2];
}
);

console.log(stringArray);