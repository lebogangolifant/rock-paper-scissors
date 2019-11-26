// html structure: redo icon,choices,players score/score

// get game var cash the Dom-sstore datafor future use
let userScore = 0;
let computerScore = 0;
// html store DOM var 'show results on html page'
const rock_i = document.getElementById("rock"); //choice
const paper_i = document.getElementById("paper"); //choice
const scissors_i = document.getElementById("scissors"); //choice
const userScore_span = document.getElementById("user"); //score
const computerScore_span = document.getElementById("computer"); //score
const playersScore_div = document.querySelector(".players-score"); //score div
const results_div = document.querySelector(".result");

//computer play
computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//results
win = (userp, computerp) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

lose = () => {}

draw = () => {}

// computer play against user
game = (userSelection) => {
    const computerSelection = computerPlay();
    // compare win, lose, draw
    switch (userSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userSelection + computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userSelection + computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userSelection + computerSelection);
            break;



    }
}

// game play fuction
main = () => {
    // add event listner to choices
    rock_i.addEventListener('click', function() {
        game("rock"); //function 
    })

    paper_i.addEventListener('click', function() {
        game("paper"); //function
    })

    scissors_i.addEventListener('click', function() {
        game("scissors"); //function
    })
}

main();