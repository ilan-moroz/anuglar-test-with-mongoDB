export class AccountAction {
  public accountNumber: number;
  public type: string;
  public date: Date;
  public amount: number;
  public interest?: number;
  public payments?: number;
  constructor(
    accountNumber: number,
    type: string,
    date: Date,
    amount: number,
    interest?: number,
    payments?: number
  ) {
    this.accountNumber = accountNumber;
    this.type = type;
    this.date = date;
    this.amount = amount;
    this.interest = interest;
    this.payments = payments;
  }
}
