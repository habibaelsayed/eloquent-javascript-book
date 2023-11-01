// my solution
let isEven = function (num) {
    if (num == 0) return true;
    if (num == 1) return false;
    if (num < 0) return isEven(-num);
    return isEven(num-2);
}


// book solution
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
}
  
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false