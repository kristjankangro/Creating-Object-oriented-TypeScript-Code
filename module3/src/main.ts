import './style.css'
import {CheckingAccount} from "./checkingAccount.ts";
import {person} from "./Person.ts";

//2 intro
{
// #### Create object using object literal
	const objLiteral = {
		balance: 500
	};

// #### Create object using a class
	class ClassObject {
		balance = 1000;
	}

	const classObj = new ClassObject();

// #### Create object using a function
	function FunctionObject() {
		return {balance: 9000}
	}

	const functionObj = FunctionObject();

// #### Create object using Object.create()
	const objCreate = Object.create(objLiteral);
	const total = objLiteral.balance + classObj.balance + functionObj.balance + objCreate.balance;

	document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
   <h2>Welcome to Acme Bank!</h2><br /><h5>Your account balances:</h5><br />
        Object Literal Object Balance: $${objLiteral.balance}
        <br />
        Class Object Balance: $${classObj.balance}
        <br />
        Function Constructor Object Balance: $${functionObj.balance}
        <br />
        Object.create() Object Balance: $${objCreate.balance}

        <br /><br />
        <strong>Total:</strong> $${total}
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
}

//3 class & object

class Renderer {
	static render(html: string) {
		document.querySelector('#app')!.innerHTML = html;
	}
}

class Main {

	checkingAccount: CheckingAccount;
	constructor() {
		this.checkingAccount = new CheckingAccount("Kristjan Kangro arveldus");
		this.renderAccount()
	}

	renderAccount() {
		console.log('render account');
		const html = `<h1>${this.checkingAccount.title}</h1>
Amount: ${this.checkingAccount.balance}
<input type="number" id="depositWithdrawalAmount" placeholder="deposit"/>
<button id="deposit" onclick="main.depositWithDrawal()">deposit</button>
<button id="withdraw" onclick="main.depositWithDrawal()">withdraw</button>
`;
		Renderer.render(html)
	}

	depositWithDrawal() {
		let amountInput: HTMLInputElement = document.querySelector('#depositWithdrawalAmount')!;
		let amount = +amountInput.value;
		console.log(amount);
			this.checkingAccount.updateBalance(amount);
		this.renderAccount();
	}
}

const main = new Main();

(<any>window).main = main;
(<any>window).person = person;