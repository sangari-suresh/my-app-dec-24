import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {

  constructor(private _accountsService:AccountsService, private _router:Router) { }

  public accountsForm:FormGroup=new FormGroup(
    {
      account_name:new FormControl(),
      available_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profie_picture:new FormControl(),
    }
  )


  create(){
    console.log(this.accountsForm.value);
    this._accountsService.createAccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("vehicle created successfully");
        this._router.navigateByUrl("/dashboard/accounts");
      },(error:any)=>{
        alert("Internal server error");
      }
    )
  }
}
