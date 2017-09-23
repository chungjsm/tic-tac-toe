var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var playerTurn = "X";
var gameMode = "Player";
var board = ["", "", "", "", "", "", "", "", ""]
var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		if(this.textContent === ""){
			this.textContent = playerTurn;
			playerTurn === "X" ? playerTurn = "O": playerTurn = "X";
		} else {

		}
	})
};

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		reset()
	})
}

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	for(var i = 0; i < squares.length; i++){
		squares[i].textContent = "";
	}
}

function checkWinner(winConditions){
	for(i = 0; i < winConditions.length; i++){
		for(j = 0; j < winConditions[i].length; j++){
		}
	}
}
