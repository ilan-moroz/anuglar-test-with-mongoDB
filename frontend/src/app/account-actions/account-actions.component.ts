import { Component } from '@angular/core';
import { BankService } from '../service/bank.service';
import { AccountAction } from 'src/Models/AccountAction';

@Component({
  selector: 'app-account-actions',
  templateUrl: './account-actions.component.html',
  styleUrls: ['./account-actions.component.css'],
})
export class AccountActionsComponent {
  accountNumber: number = 0;
  action: string = '';
  amount: number = 0;
  payments?: number;
  interest?: number;

  // the service to use
  constructor(private bankService: BankService) {}
  ngOnInit() {}

  onSub() {
    const newAction = new AccountAction(
      this.accountNumber,
      this.action,
      new Date(),
      this.amount,
      this.interest,
      this.payments
    );

    // after submit button click add new action to database using the service
    this.bankService.addNewAction(this.accountNumber, newAction).subscribe(
      (response) => {
        console.log(response);
        // Reset the input fields after service call
        this.accountNumber = 0;
        this.action = '';
        this.amount = 0;
        this.payments = undefined;
        this.interest = undefined;
      },
      (error) => console.error(error)
    );
  }
}
