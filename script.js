const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

const findSpiderMan = function (superheroes) {
    return superheroes.find(function (superhero) {
        return superhero.name === "Spiderman";
    });
};
console.log("Find Spiderman:", findSpiderMan(superheroes));

// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray;
};

console.log(doubleArrayValues([1, 2, 3]))
// result should be [2, 4, 6]



const containsNumberBiggerThan10 = function (array) {
    return array.some(number => {
        return number > 10;
    });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]))
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]))
// result should be false


function isItalyInTheGreat7(array) {
    return array.includes("Italy");
}
console.log(
    "Is Italie aanwezig?:",
    isItalyInTheGreat7([
        "Canada",
        "France",
        "Germany",
        "Italy",
        "Japan",
        "United Kingdom",
        "United States"
    ])
);


const tenfold = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]




function isBelow100(array) {
    return array.every(number => {
        return number < 100;
    });
}
console.log(
    "Onder de 100?:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
console.log(
    "Onder de 100, Should be true:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
);


const bigSum = function (array) {
    return array.reduce((acc, number) => {
        return acc + number;
    });
};

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
  // result should be 1118