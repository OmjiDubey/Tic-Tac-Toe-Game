let cells = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let container = document.querySelector(".container");

let turnO = true;  //player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8,]
];

cells.forEach((cell) =>{
    cell.addEventListener("click", () => {
        if(turnO){
            cell.innerText = "X";
            turnO = false;
        }
        else{
            cell.innerText = "O";
            turnO = true;
        }
        cell.disabled = true;
        checkWinner();
    })
});

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
    container.classList.remove("hide");
}

const enableBtn = () => {
    for( let cell of cells) {
        cell.disabled = false;
        cell.innerText = "";
    }
}

const disableBtn = () => {
    for( let cell of cells) {
        cell.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBtn();

    container.classList.add("hide");
};

const showDraw = () => {
    msg.innerText = `It's a Draw !`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
                return;
            }
        }
    }
    checkDraw();
};

const checkDraw = () => {
    const isDraw = Array.from(cells).every(cell => cell.innerText !== "");
    if (isDraw) {
        showDraw(); 
    }
};


newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
