let board = "";
let size = Number(prompt("Enter grid size"));
for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
        if((j+i)%2==0)
            board+=" ";
        else
            board+="#";
    }
    board+="\n";
}
