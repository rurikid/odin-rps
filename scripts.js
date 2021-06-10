const rock = 1;
const paper = 2;
const scissors = 3;
let player = 0;
let ai = 0;
let draw = 0;

function round(playerSelection, aiSelection) {
	switch (playerSelection)
	{
		case rock:
			aiSelection == paper ? increment("ai") : 
			(aiSelection == scissors ? increment("player") : increment("draw"));
			break;
		case paper:
			aiSelection == scissors ? increment("ai") : 
			(aiSelection == rock ? increment("player") : increment("draw"));
			break;
		case scissors:
			aiSelection == rock ? increment("ai") : 
			(aiSelection == paper ? increment("player") : increment("draw"));
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

function increment(label) {
	switch (label)
	{
		case "player":
			document.getElementById("player-score").innerHTML = ++playerScore;
			break;
		case "ai":
			document.getElementById("ai-score").innerHTML = ++aiScore;
			break;
		case "draw":
			document.getElementById("draw-count").innerHTML = ++drawCount;
			break;
	}
}

function roundSelect() {

}