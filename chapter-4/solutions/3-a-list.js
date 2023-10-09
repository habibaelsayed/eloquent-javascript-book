let arrayToList = function (array) {
    list = {value: array[array.length-1], rest:null};
    for(let i=array.length-2;i>=0;i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

let listToArray = function(list) {
    let array = [];
    while(list){
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

let prepend = function(list, element) {
    return {value: element, rest: list};
}

let nth = function(list, number) {
    while(number--){
        list = list.rest;
    }
    return list.value;
}

//nth recursive way
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
