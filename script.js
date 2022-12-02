let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const scoreBoardDiv = document.querySelector(".scoreBoard");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");

const getComputerChoice = () => {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const convertToWord = (letter) => {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

const win = (userChoice, computerChoice) => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    compScoreSpan.innerHTML = compScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp) You won!`
}

const lose = (userChoice, computerChoice) => {
    compScore++;
    compScoreSpan.innerHTML = compScore;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = `${convertToWord(computerChoice)}(comp) beats ${convertToWord(userChoice)}(user) You lost! :( `
}

const draw = (userChoice, computerChoice) => {
    console.log("It's a draw");
    resultDiv.innerHTML = "It's a draw";
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

let main = () => {

    rockDiv.addEventListener('click', () => {
        game("r")
    });
    
    paperDiv.addEventListener('click', () => {
        game("p")
    });
    
    scissorsDiv.addEventListener('click', () => {
        game("s")
    });
}

main();
