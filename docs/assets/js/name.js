$( document ).ready(function() {
    //variables and arrays
    const playerList = ["leopold"]
    const counter = 6; 
    let wins = 0;
    let stop = false; 
    let userChoice = []; 
    let chosenWord = []; 
    let compChoice; 
    let guess; 

    //resets variables and arrays back to original state 
    function restart() {
        guess = counter
        stop = false
        userChoice = []
        chosenWord = []

        compChoice = playerList[0].toLowerCase()
        for (var i=0; i < compChoice.length; i++){
            if (compChoice[i] === " ") {
                chosenWord.push(" ")
            } else {
                chosenWord.push("_")
            }
        }
        updateScore ()
    }

    // assign values to the scores
    function updateScore () {
        document.getElementById("chosenName").innerHTML = chosenWord.join(" ")
        document.getElementById("guesses").innerText = guess
        document.getElementById("usedletter").innerHTML =  userChoice.join("")
    }

    restart()

    document.onkeypress = function(event) { 
        if (stop = true) {
            checkForLetter(event.key.toLowerCase())
        }
    }

    // Game loop 
    function checkForLetter(letter) {
        let correctLetter = false
        for (var i=0; i<compChoice.length; i++) {
            if (letter === compChoice[i]) {
                chosenWord[i] = letter
                correctLetter = true
                if (chosenWord.join("") === compChoice) {
                    stop = true
                    $("#game").remove();
                    $("#middle").prepend().html('<h2>Leopold Kevin Cowan!</h2>');
                    $("#midpic").prepend().html('<img src="assets/images/dance.gif" class="corPics"></img>');
                }
            }
        }
    //checks if letter typed has already been used 
    if (!correctLetter) {
        if (!userChoice.includes(letter)) {
            userChoice.push(letter)
            guess--
        }
        if (guess === 0) {
            chosenWord = compChoice.split()
            stop = true
            $("#game").remove();
            $("#middle").prepend().html('<h2>You Lose! Guess you will learn later!</h2>');
            $("#midpic").prepend().html('<img src="assets/images/cry.gif" class="corPics"></img>');
            
        }
    }

    updateScore ()

    }
});
