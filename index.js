const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    console.log(cats.push(name));
    return(cats.push(name));
}
console.log(destructivelyAppendCat("Ralph"));
console.log(cats);

function destructivelyPrependCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    console.log(cats.unshift(name));
    return(cats.unshift(name));
}
console.log(destructivelyPrependCat("Bob"));
console.log(cats);

function destructivelyRemoveLastCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    console.log(cats.pop(name));
    return(cats.pop(name));
}
console.log(destructivelyRemoveLastCat("Garfield"));

function destructivelyRemoveFirstCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    console.log(cats.shift(name));
    return(cats.shift(name));
}
console.log(destructivelyRemoveFirstCat("Milo"));

function appendCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    let Cats=[...cats];
    console.log();(Cats.push(name));
    return(Cats.push(name)); 
}
console.log(appendCat("Broom"));
console.log(cats);

function prependCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    let Cats=[...cats];
    console.log(Cats.shift(name));
    return(Cats.shift(name)); 
}
console.log(prependCat("Broom"));
console.log(cats);

function removeLastCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    let Cats=[...cats];
    console.log(Cats.slice(name));
    return(Cats.slice(name)); 
}
console.log(removeLastCat("Garfield"));
console.log(cats);

function removeFirstCat(name) {
    cats.length= 0;
    cats.push("Milo", "Otis", "Garfield");
    let Cats=[...cats];
    console.log(Cats.splice(name));
    return(Cats.splice(name)); 
}
console.log(removeFirstCat("Milo"));
console.log(cats);