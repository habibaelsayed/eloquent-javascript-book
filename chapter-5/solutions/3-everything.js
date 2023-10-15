function every(array, predicate) {
    for(let el of array)
        if(!predicate(el)) return false;
    return true;
}

function every2(array, predicate) {
    return !array.some(el => !predicate(el))
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true