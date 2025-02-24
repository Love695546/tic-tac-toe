
let userScore = 0;    //we can create userScore
let compScore = 0;       //we can create ComputerScore

//let access Choices divs
const choices = document.querySelectorAll(".choice");

let msg = document.querySelector(".msg");   //access  div tag of msg 

const userScorepara =document.querySelector("#user-score");     //access the userScore paragraph
const compScorepara =document.querySelector("#comp-score");     //access the ComputerScore paragraph


// make a function which is generate random number 
  const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


//make a draw game function
const drawGame = () => {
 msg.innerText = `Game Was Draw. Play again`;   //display msg in the message box
 msg.style.backgroundColor ="#081b31";          //display background color of message box
};



//make function to show winner on the document
const showWinner = (userWin, userChoice, compChoice ) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
    
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
  }
};



//this function is create to play Game and pic the option by user.
const playGame = (userChoice) => {
// console.log("user choice =", userChoice);

  //Generate computer choice
  const compChoice = genCompChoice();
// console.log("computer choice =", compChoice);



//if - else condition which is define who's the winner
  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;      //User loses by computer : User wins from computer
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;       //User loses by computer : User wins from computer
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;           //User loses by computer : User wins from computer
    }
    showWinner(userWin, userChoice, compChoice);        //this function is called for show winner 
  }
};


//this is a first part of making project.
choices.forEach((choice) => {         //this forEach loop use to define choice as a variable to apply EventListener
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");     //this getAttribute method is used to access element by his id
    playGame(userChoice);   //this play function is called to play game by click the userChoice
  });
});


/*
let userScore = 0;
let compScore = 0;

const Choices = document.querySelectorAll(".choice");

let msg = document.querySelector(".msg");

let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};


const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.innerText = `Your choice ${userChoice}! beats ${compChoice}`;
  }
  else{
    compScore++;
    compScorepara.innerText = compScore;
    msg.style.backgroundColor = "red";
    msg.innerText = `computer choice ${compChoice}! beats your ${userChoice}`;
    console.log("user lost!");
  }
};

const drawGame = () => {
  msg.style.backgroundColor = "#081b31";
  msg.innerText = `Game Was Draw!.please play again`
};

const playGame = (userChoice) => {
  // console.log(`user choice ${userChoice}`);

  const compChoice = genCompChoice();
  // console.log(`computer choice ${compChoice}`);
if(userChoice === compChoice){
  drawGame();
}else{
  let userWin = true;
  if(userChoice === "rock"){
    userWin = compChoice === "paper" ? false : true;
  }else if(userChoice === "paper")
  {
    userWin = compChoice === "scissors" ? false : true;
  }
else{
  userWin = compChoice === "rock" ? false : true;
}
showWinner(userWin,userChoice,compChoice);
}
};

Choices.forEach((choice) => {
choice.addEventListener("click", () => {
  const userChoice = choice.getAttribute("id");
  // console.log(userChoice);
  playGame(userChoice);
});
});
*/