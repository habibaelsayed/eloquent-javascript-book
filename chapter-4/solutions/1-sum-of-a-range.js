// my solution

let range = function(start, end, step=1) {
    let array = [];
    if(start < end)
        for(let i=start; i<=end; i+=step)
            array.push(i);
    else 
        for(let i=start; i>=end; i+=step)
            array.push(i);
    return array;
}
let sum = function(array){
    let result = 0;
    for(let el of array){
        result+=el;
    }
    return result;
}


console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55