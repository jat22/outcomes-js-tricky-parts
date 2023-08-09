function createAccount(pin, amount) {
	let balance = amount || 0;
	return {
		checkBalance(inputPin) {
			if(inputPin === pin) return `$${balance}`;
			else return "Invalid PIN."
		},
		deposit(inputPin, depositAmt){
			if(inputPin === pin) {
				balance += depositAmt;
				return `Succesfully deposited $${depositAmt}. Current balance: $${balance}.`
			} else return "Invalid PIN."
		},
		withdraw(inputPin, withdrawAmt){
			if(inputPin === pin){
				if(balance < withdrawAmt) return  "Withdrawal amount exceeds account balance. Transaction cancelled."
				balance -= withdrawAmt;
				return `Succesfully withdrew $${withdrawAmt}. Current balance: $${balance}.`
			} else return "Invalid PIN."
		},
		changePin(inputPin, newPin){
			if(inputPin === pin){
				pin = newPin;
				return "PIN successfully changed!"
			} else return "Invalid PIN."
		}
	}
}

module.exports = { createAccount };
