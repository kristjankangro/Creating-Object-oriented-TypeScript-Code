import {BankAccount} from "./bank-account.ts";
import {AccountType} from "./account-type.ts";

export class CheckingAccount extends BankAccount {
	accountType = AccountType.Checking;

	getAccountInfo() {
		return {

		};
	}

	constructor(accountSettings: any) {
		super(accountSettings);
		this.accountType = AccountType.Checking;
	}
}