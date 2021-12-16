/*
    1. function computerPlay(): randomly returns rock, paper, or scissor
    2. function playRound(you, computer): determines who wins (handles corner cases)
    3. function game(): repeats game 5 times, keep track of score and see who wins at the end
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
    for (i = 0; i < 5; i++){
        let user = prompt("Enter your choice of Rock, Paper, or Scissor"), computer = computerPlay()
        console.log("Computer has a " + computer)
        await sleep(1000)
        if (user != "rock" && user != "paper" && user != "scissor"){
            console.log("Invalid Input. Try Again!")
            i--;
            continue
        }
        else if (computer.toLowerCase() === user.toLowerCase()){
            console.log("You both have the same thing. Try Again.")
            i--;
            continue
        }
        else if (playRound(user, computer))
            human += 1
        else    machine += 1
        console.log("You have a " + user)
        console.log("Score: You: " + human + "  Computer: " + machine)
        await sleep(3000)
    }
    if (human > machine){
        console.log("You win!")
    }
    else if (human < machine)
        console.log("You lose!")
    else    console.log("Tie!")
}

game()