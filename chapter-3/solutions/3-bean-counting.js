// my solution

let countChar = function (word, char) {
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if(word[i] == char) count++;
    }
    return count;
}

let countBs = function (word) {
    return countChar(word, "B");
}

  
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

