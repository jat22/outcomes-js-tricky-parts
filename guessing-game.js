function guessingGame() {
	let num = Math.floor(Math.random() * 100);
	let count = 1;
	let gameOver = false;
	return function(guess){
		if(gameOver) return "The game is over, you already won!"
		if(guess === num ) {
			gameOver = true
			return `You win! You found ${num} in ${count} guesses.`
		}
		if(guess > num){
			count++;
			return `${guess} is too high!`
		}
		if(guess < num){
			count++;
			return `${guess} is too low!`
		}
	}
}

module.exports = { guessingGame };
