import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-create-studentcard',
  templateUrl: './create-studentcard.component.html',
  styleUrls: ['./create-studentcard.component.css']
})
export class CreateStudentcardComponent {
  id:number=0;
  
  constructor( private _activatedRoute:ActivatedRoute,private _studentcardService:StudentcardService, private _router:Router) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        _studentcardService.getstudentcard(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            this.studentcardForm.patchValue(data);
          }
        )
      }
    )
  }
  
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
    
  submit(){
    if (this.id){
      this._studentcardService.updateStudentcard(this.id,this.studentcardForm.value).subscribe(
        (data:any)=>{
          alert("Updated Successfully!");
          this._router.navigateByUrl('/dashboard/studentcard');
        },(err:any)=>{
          alert('Internal Server Error')
        }
      );
    }else{
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
}
