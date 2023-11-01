let reverseArray = function(array) {
    let newArray = [];
    for(let i = array.length-1; i>=0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

let reverseArrayInPlace = function(array) {
    for(let i=0;i<Math.floor(array.length/2);i++){
        let temp = array[i];
        array[i] = array[array.length-1-i];
        array[array.length-1-i] = temp;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
