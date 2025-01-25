import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {
  id:number=0;

  constructor( private _activatedRoute:ActivatedRoute,private _accountsService:AccountsService, private _router:Router) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

        _accountsService.getAccount(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.accountsForm.patchValue(data);
          }
        )
      }
    )
  }
  


  public accountsForm:FormGroup=new FormGroup(
    {
      account_name:new FormControl(),
      available_balance:new FormControl(),
      account_number:new FormControl(),
      city:new FormControl(),
      profie_picture:new FormControl(),
    }
  )

  submit(){
    if (this.id){
    this._accountsService.updateAccounts(this.id,this.accountsForm.value).subscribe(
      (data:any)=>{
        alert("Updated  successfully");
        this._router.navigateByUrl("/dashboard/accounts");
      },(error:any)=>{
        alert("Internal server error");
      }
    );

  }else{
    this._accountsService.createAccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Accounts created successfully");
        this._router.navigateByUrl("/dashboard/accounts");
      },(error:any)=>{
        alert("Internal server error");
      }
    )
  }
  }
}


