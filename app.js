let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; // playerX , playerO

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const resetButton = () => {
  enableBoxes();
  msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetButton);
newGame.addEventListener("click", resetButton);

const showWinner = (winner) => {
  msg.innerText = `Congratulations ! Winner is ${winner}`;
  console.log(msg.innerText);
  disableBoxes();
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (pattern of winningPattern) {
    let postVal1 = boxes[pattern[0]].innerText;
    let postVal2 = boxes[pattern[1]].innerText;
    let postVal3 = boxes[pattern[2]].innerText;

    if (postVal1 != "" && postVal2 != "" && postVal3 != "") {
      if (postVal1 === postVal2 && postVal2 === postVal3) {
        console.log("winner !", postVal1);
        showWinner(postVal1);
      }
    }
  }
  // if winner not decided to its draw !
  // if(showWinner(winner)){
  //   console.log("draw !");
    
  //   msg.innerText = `its draw !`;
  // }
};
