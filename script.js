function playGame(userChoice) {
    const choices = ["Stack", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("user-choice").innerText = `Your Choice: ${userChoice}`;
    document.getElementById("computer-choice").innerText = `Computer's Choice: ${computerChoice}`;

    let winner = determineWinner(userChoice, computerChoice);
    document.getElementById("winner").innerText = winner;
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a Tie!";
    }

    if (
        (user === "Stack" && computer === "Scissors") ||
        (user === "Scissors" && computer === "Paper") ||
        (user === "Paper" && computer === "Stack")
    ) {
        return "You Win! 🎉";
    } else {
        return "Computer Wins! 😢";
    }
}
