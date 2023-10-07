// my solution
let min = function (num1, num2){
    return num1 < num2? num1 : num2;
}

// book solution
function min(a, b) {
    if (a < b) return a;
    else return b;
}
  
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10