import { Component, OnInit } from '@angular/core';
import { BankService } from '../service/bank.service';
import { AccountAction } from 'src/Models/AccountAction';

interface BankAccountResponse {
  accountNumber: number;
  operations: AccountAction[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  bankAccountNumber = 0;

  accountActions: BankAccountResponse[] = [];

  // bring the service to use
  constructor(private bankService: BankService) {}

  ngOnInit() {}

  // after submit button click get all action by account number using the service
  onSub() {
    this.bankService.getBankActions(this.bankAccountNumber).subscribe(
      (response) => {
        console.log(response);
        this.accountActions = response;
        console.log(this.accountActions);
        // reset the input after submit
        this.bankAccountNumber = 0;
      },
      (error) => console.error(error)
    );
  }
}
