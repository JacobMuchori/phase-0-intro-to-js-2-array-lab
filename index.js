var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    console.log(cats.push(name= "Ralph"));
    return cats;
}
console.log(destructivelyAppendCat("Ralph"));

var cats = ["Milo", "Otis", "Garfield"];
function destructivelyPrependCat(name) {
    console.log(cats.unshift(name= "Bob"));
    return cats;
}
console.log(destructivelyPrependCat("Bob"));

var cats = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastCat(name) {
    console.log(cats.pop(name= "Garfield"));
    return cats;
}
console.log(destructivelyRemoveLastCat("Garfield"));

var cats = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstCat(name) {
    console.log(cats.shift(name= "Milo"));
    return cats;
}
console.log(destructivelyRemoveFirstCat("Milo"));

var cats = ["Milo", "Otis", "Garfield"];
function appendCat(name) {
    var Cats=[...cats];
    console.log(Cats.push(name= "Broom"));
    return Cats;
}
console.log(appendCat("Broom"));

var cats = ["Milo", "Otis", "Garfield"];
function prependCat(name) {
    var Cats=[...cats];
    console.log(Cats.unshift(name= "Arnold"));
    return Cats;
}
console.log(prependCat("Arnold"));
console.log(cats);

var cats = ["Milo", "Otis", "Garfield"];
function removeLastCat(name) {
    var Cats=[...cats];
    console.log(Cats.pop(name= "Garfield"));
    return Cats;
}
console.log(removeLastCat("Garfield"));
console.log(cats);

var cats = ["Milo", "Otis", "Garfield"];
function removeFirstCat(name) {
    var Cats=[...cats];
    console.log(Cats.shift(name= "Milo"));
    return Cats; 
}
console.log(removeFirstCat("Milo"));
console.log(cats);