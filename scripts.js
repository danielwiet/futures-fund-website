function openNav() {
  document.getElementById("myNav").style.height = "55%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

function humanOrRobot() {
  let robot = confirm("Are you human? Ok for yes, cancel for no");
  if (robot === true) {
    //If the test condition 1 is TRUE then these it will check for test condition 2
    let rUSure = confirm("Are you certain? OK for yes, cancel for no");
    if (rUSure === false) {
      //If the test condition 2 is TRUE then these statements will be executed
      alert("Only humans question their own existence");
    } else {
      //If the c test condition 2 is FALSE then these statements will be executed
      alert("Nice try, nobody likes a lying robot!");
    }
  } else {
    //If the test condition 1 is FALSE then these statements will be executed
    alert("Honest robots also welcome");
  }
}

const getUserChoice = () => {
  let userInput = window.prompt("Choose either rock, paper, or scissors");
  userInput = userInput.toLowerCase();
  if (
    userInput === "laser" ||
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "laser") {
    alert("You played the secret weapon and obliterated your opponent");
  }
  if (userChoice === computerChoice) {
    alert ("Game is a tie");
  }
  if (userChoice == "rock") {
    if (computerChoice === "paper") {
      alert ("The computer won!");
    } else {
      alert ("You won!");
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      alert ("The computer won!");
    } else {
      alert ("You won!");
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      alert ("The computer won!");
    } else {
      alert ("You won!");
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  alert("You chose " + userChoice);
  alert("The computer chose " + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
};