
function randomNum(max){
    return Math.floor(Math.random() * max) + 1;
}
var answer = randomNum(100);


var guess = document.getElementById("input");
var sub = document.getElementById("sub");
var allguesses = document.getElementById("previousGuess");
var rightOrWrong = document.getElementById("rightOrWrong");
var hint = 	document.getElementById("hint");
var nGuesses = 1;

function reset(){
    nGuesses = 1;
    answer = randomNum(100);
    
    guess.disabled = false;
    sub.disabled = false;    
    guess.focus(); 
    
    allguesses.innerHTML = "";
    rightOrWrong.innerHTML = "";
    hint.innerHTML = "";
    
    var res = document.getElementById('reset');
    res.remove();
}
function setGameOver()
{
    //disable the guess field
    guess.disabled = true;
    sub.disabled = true;
    
    //append reset button
    resetButton = document.createElement('button');
    resetButton.innerHTML = 'start new game';
    resetButton.id = 'reset';   
    document.body.appendChild(resetButton);
    
    resetButton.addEventListener('click', reset);
}

function  check() {
    // Get the value of the input field with id="numb"
    var x = guess.value;

    if( nGuesses == 1)
		allguesses.innerHTML ="Previous Guesses: ";
	allguesses.innerHTML += x + ' ';
		
	nGuesses += 1;
	if(nGuesses > 10){
        hint.innerHTML("Too many guesses! GAMEOVER");   
        setGameOver();
    }
		
	if(x == answer){
        rightOrWrong.textContent = "Congratulations! You got it right!";
        hint.textContent = '';
        setGameOver();
    }else{
        rightOrWrong.innerHTML = "Wrong!";
        if(x > answer)
            hint.innerHTML = "Too High!";
        else if(x < answer)
            hint.innerHTML = "Too Low!";
    }
    
    guess.value = '';
}

sub.addEventListener('click',check);
