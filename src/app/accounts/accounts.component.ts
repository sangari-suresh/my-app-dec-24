import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  accounts: any = [];
  constructor(private _accountsService: AccountsService) {
    _accountsService.getAccounts().subscribe((data: any) => {
      this.accounts = data;
      console.log(this.accounts);
    });
  }

  term: string = '';
  filter() {
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
        console.log(this.accounts);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
  column: string = '';
  order: string = '';
  sort() {
    this._accountsService.getSortedAccounts(this.column, this.order).subscribe(
      (data: any) => {
        this.accounts = data;
        console.log(this.accounts);
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
