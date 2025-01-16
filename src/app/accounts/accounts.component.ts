import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {

  accounts:any = [];
  _accountsservice: any;
  constructor( private _accountsService:AccountsService) {
    this.pageload();
  }

  pageload(){
    this._accountsService.getAccounts().subscribe(
      (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    }
   )
  }

  term:string ="";
  filter(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  column:string ="";
  order:string ="";
  sort() {
    this._accountsService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

limit:number=0;
page:number=0;
pagination(){
  this._accountsService.getPaginatedAccounts(this.limit,this.page).subscribe(
    (data:any)=>{
      this.accounts=data;
      console.log(this.accounts);
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}

  delete(id:number){
    if(confirm("Are you sure to delete")==true){
      this._accountsService.deleteAccounts(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Succefully");
          this.pageload();
        },(err:any)=>{
          alert("Internal Server Error");
        }
      )
    }else{
      alert("You have cancelled")
    }
  }
}
