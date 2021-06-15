const rock = 1;
const paper = 2;
const scissors = 3;
let player = 0;
let ai = 0;
let draw = 0;

const rockIcon = '<i class="fas fa-gem"></i>';
const paperIcon = '<i class="fas fa-paper-plane"></i>';
const scissorsIcon = '<i class="fas fa-cut"></i>';

function round(playerSelection, aiSelection) {
	switch (playerSelection)
	{
		case rock:
			aiSelection == paper ? increment("ai", `AI&nbsp${paperIcon}&nbspbeats your&nbsp${rockIcon}`) : 
			(aiSelection == scissors ? increment("player", `Your&nbsp${paperIcon}&nbspbeats AI&nbsp${scissorsIcon}`) : 
			increment("draw", `${rockIcon}&nbspvs&nbsp${rockIcon}... DRAW`));
			break;
		case paper:
			aiSelection == scissors ? increment("ai", `AI&nbsp${scissorsIcon}&nbspbeats your&nbsp${paperIcon}`) : 
			(aiSelection == rock ? increment("player", `Your&nbsp${paperIcon}&nbspbeats AI&nbsp${rockIcon}`) : 
			increment("draw", `${paperIcon}&nbspvs&nbsp${paperIcon}... DRAW`));
			break;
		case scissors:
			aiSelection == rock ? increment("ai", `AI&nbsp${paperIcon}&nbspbeats your&nbsp${scissorsIcon}`) : 
			(aiSelection == paper ? increment("player", `Your&nbsp${scissorsIcon} beats AI&nbsp${paperIcon}`) : 
			increment("draw", `${scissorsIcon}&nbspvs&nbsp${scissorsIcon}... DRAW`));
			break;
	}
}

function selectClick(obj) {
	let playerSelect = obj.id == "rock-select" ? rock : 
		(obj.id == "paper-select" ? paper : scissors);
	round(playerSelect, aiSelect());
}

function aiSelect() {
	let select = Math.floor(Math.random() * 3) + 1;
	return select;
}

let playerScore = 0;
let aiScore = 0;
let drawCount = 0;
const winTally = '<li><i class="fas fa-trophy"></i></li>';
let playerTally = '';
let aiTally = '';

function increment(label, status) {
	document.getElementById("game-status").innerHTML = status;

	switch (label)
	{
		case "player":
			document.getElementById("player-tally").innerHTML += winTally;
			playerScore++;
			break;
		case "ai":
			document.getElementById("ai-tally").innerHTML += winTally;
			aiScore++;
			break;
		case "draw":
			break;
	}

	if (aiScore == 3)
	{
		document.getElementById("game-status").innerHTML += "<br />AI won this game!";
	}
	if (playerScore == 3)
	{
		document.getElementById("game-status").innerHTML += "<br />You won this game!";
	}
}

function roundSelect() {

}