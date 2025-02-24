
let Boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To track Draw

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

//reset game function
const resetGame = () => {
    turnO = true;
count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

//Print X and O in the Boxes and check winner

Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
       if(turnO) {
       
        box.innerText = "O";
        box.style.color ="red";
        turnO = false;
    }else {
        
        box.innerText = "X";
        box.style.color ="Green";
        turnO = true;
       }

       box.disabled = true;
       count++;

       let isWinner = checkWinner();

       if (count === 9 && !isWinner) {
         gameDraw();
       }
     });
   });
   
   const gameDraw = () => {
     msg.innerText = `Game was a Draw.`;
     msgcontainer.classList.remove("hide");
     disableBoxes();
   };


//disable button/Boxes when the winner is shown.

const disableBoxes = () => {
    for(let box of Boxes)
    {
        box.disabled = true;
    }
};

//Enable function when the game is finish or reset the game

const enableBoxes = () => {
    for(let box of Boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};


//this is a showWinner function 
const showWinner = (winner) => {
msg.innerText = `Congratulation, winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
};

//check function and call showWinner function
 const checkWinner = () =>{
 for( let Pattern of winPatterns)
 {
     let pos1Val =Boxes[Pattern[0]].innerText;
     let pos2Val =Boxes[Pattern[1]].innerText;
    let pos3Val =Boxes[Pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val &&pos2Val === pos3Val){
            // console.log("winner",pos1Val);
            
    showWinner(pos1Val); //show winner function is called
return true;
    }
    }
 }
}; 

newGameBtn.addEventListener("click",resetGame); // Event Occur when newgame btn is click
resetBtn.addEventListener("click", resetGame); //Event Occur when reset btn is click