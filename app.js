let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

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
btns.forEach((btn) =>{
    btn.addEventListener("click", () => {
        console.log("Btn clicked");
        if(turnO){
            btn.innerText = "X";
            turnO = false;
        }
        else{
            btn.innerText = "O";
            turnO = true;
        }
        btn.disabled = true;

        checkWinner();
    })
});

const resetGame = () => {
    turnO = true;
    enaableBtn();
    msgContainer.classList.add("hide");
}

const enaableBtn = () => {
    for( let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

const disableBtn = () => {
    for( let btn of btns) {
        btn.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
    
};
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
