import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-create-accountsdetails',
  templateUrl: './create-accountsdetails.component.html',
  styleUrls: ['./create-accountsdetails.component.css']
})
export class CreateAccountsdetailsComponent {
accounts:any=[];
constructor( private _activatedRoute:ActivatedRoute,private _accountsService:AccountsService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
    
      this._accountsService.getAccount(data.id).subscribe(
        (data:any)=>{
          this.accounts=data;
          console.log("data.",data);
        }
      )
    }
    
  )
}
}
