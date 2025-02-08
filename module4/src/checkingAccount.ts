export class CheckingAccount{
	constructor(public title: string) {}
	
	private _balance: number=0;
	
	get balance() {
		return this._balance;
	}
	
	set balance(value: number) {
		this._balance = value;
	}
	
	updateBalance(amount: number){

		console.log("deposit");
		this._balance += amount;
	}

}