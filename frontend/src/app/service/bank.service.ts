import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountAction } from 'src/Models/AccountAction';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private http: HttpClient) {}

  // service that gets all operations for a bank account
  getBankActions(bankAccountNumber: number): Observable<any> {
    const api = `http://localhost:4000/api/v1/mongoBank/operations/${bankAccountNumber}`;
    return this.http.get(api);
  }

  // service that adds a new operation to the database
  addNewAction(accountNumber: number, newAction: AccountAction) {
    const api = `http://localhost:4000/api/v1/mongoBank/operation`;
    return this.http.post(api, { accountNumber, operation: newAction });
  }
}
