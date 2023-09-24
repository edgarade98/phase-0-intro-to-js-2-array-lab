// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name) {
    cats.push(name);
  }
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}
function appendCat(name){
    const newCatsArray = [...cats, name];
    return newCatsArray;
}
function prependCat(name){
    const newCatsArray = [name, ...cats];
    return newCatsArray;
}
function removeLastCat(name) {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}
function removeFirstCat(name) {
    const newCatsArray = cats.slice(1);
    return newCatsArray;
} 


