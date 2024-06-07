

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


// Construction Funktioner

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

const Mad1 = new MadFordeler("Blåbær","blå","bær",7, "sødt");
const Mad2 = new MadFordeler("Københavnerstang", "gul", "is",10, "sødt")

console.log(Mad1);
console.log(Mad2);

//Object Literal

const fodbold = {
    farve: "Hvid",
    størlese: "Lille",
    Form: "Rund"
}
console.log(fodbold);

//