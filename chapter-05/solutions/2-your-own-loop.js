function loop (start, test, update, body) {
    for ( let value = start; test(value); value = update(value)){
        body(value);
    }
}

loop(0, n => n < 5, n => n + 1, console.log);
// 0 1 2 3 4

loop(3, n => n > 0, n => n - 1, console.log);
// 3 2 1