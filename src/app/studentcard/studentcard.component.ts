import { Component } from '@angular/core';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-studentcard',
  templateUrl: './studentcard.component.html',
  styleUrls: ['./studentcard.component.css']
})
export class StudentcardComponent {

  studentcard:any=[];
  constructor( private _studentcardservice:StudentcardService){
      this.pageload();
  }
  pageload(){
    this._studentcardservice.getstudentcards().subscribe(
      (data:any)=>{
        this.studentcard=data;
        console.log(this.studentcard);
      }
    )
  }
  term:string="";
  filter(){
    this._studentcardservice.getFilteredstudentcard(this.term).subscribe(
      (data:any)=>{
        this.studentcard=data;
        console.log(this.studentcard);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  column:string="";
  order:string="";
  sort(){
    this._studentcardservice.getSortedstudentcard(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentcard=data;
        console.log(this.studentcard);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  limit:number=0;
  page:number=0;
  pagination(){
    this._studentcardservice.getPaginatedstudentcard(this.limit,this.page).subscribe(
      (data:any)=>{
        this.studentcard=data;
        console.log(this.studentcard);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")==true){
      this._studentcardservice.deletestudentcard(id).subscribe(
        (data:any)=>{
          alert("Record Deleted successfully");
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
