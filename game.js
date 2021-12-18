/*
    1. function computerPlay(): randomly returns rock, paper, or scissor
    2. function playRound(you, computer): determines who wins (handles corner cases)
    3. function game(): keeps playing until either you or the computer gets to 5 pts first
*/

function computerPlay() {
    let x = Math.floor((Math.random() * 3) + 1);
    if (x === 1)
        return "Rock"
    else if (x === 2) 
        return "Paper"
    else
        return "Scissor"
}

/*
    Combinations: rock, paper, scissor
    human vs. computer:
    rock-paper, rock-scissor (W)
    paper-rock (W), paper-scissor
    scissor-rock, scissor-paper (W)
*/

function playRound(you, computer){
    const human = you.toLowerCase(), machine = computer.toLowerCase()
    if (human === "rock" || human === "paper" || human === "scissor"){
        if (human === "rock" && machine === "scissor")
            return true
        else if (human === "paper" && machine === "rock")
            return true
        else if (human === "scissor" && machine === "paper")
            return true
    }
    return false
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function game(){
    let human = 0, machine = 0;
    const container = document.querySelector('body');
    const btn = document.querySelectorAll('button');
    const robot = document.createElement('div');
    const you = document.createElement('div');
    const score = document.createElement('h3');
    const res = document.createElement('h2');
    res.style.color = "red";
    container.appendChild(you);
    container.appendChild(robot);
    container.appendChild(score);
    container.appendChild(res);
    btn.forEach((button) => {
        let computer = computerPlay(), humanChoice;
        button.addEventListener("click", async () => {
            humanChoice = button.textContent;
            if (human < 5 && machine < 5){
                await sleep(100);
                robot.textContent = "Computer has a " + computer;
                you.textContent = "You have a " + humanChoice;
                if (humanChoice.toLowerCase() != computer.toLowerCase()){
                    if (playRound(humanChoice, computer))
                        human++;
                    else    machine++;
                    if (human === 5 && machine < 5){
                        res.textContent = "You win! Congrats";
                    }
                    else if (human < 5 && machine === 5){
                        res.textContent = "You lose!";
                    }
                }
                score.textContent = "You: " + human + " Computer: " + machine;
            }
        });
    });
}

game()