import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-create-studentcard',
  templateUrl: './create-studentcard.component.html',
  styleUrls: ['./create-studentcard.component.css']
})
export class CreateStudentcardComponent {
  
  constructor(private _studentcardService:StudentcardService, private _router:Router) { }
  
  public studentcardForm:FormGroup=new FormGroup(
    {
      name:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      dob:new FormControl(),
      profile_picture:new FormControl(),
      email:new FormControl(),
      school_logo:new FormControl(),
      school_name:new FormControl(),
      school_city:new FormControl(),
      school_pin:new FormControl(),
    }
  )
    
  create(){
    console.log(this.studentcardForm.value);
    this._studentcardService.createstudentcard(this.studentcardForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Studentcard created successfully");
    
      this._router.navigateByUrl("/dashboard/studentcard");
   },(error:any)=>{
    alert("internal server error");
   }
  )
  }
}
