import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentcardService } from '../studentcard.service';

@Component({
  selector: 'app-studentcarddetails',
  templateUrl: './studentcarddetails.component.html',
  styleUrls: ['./studentcarddetails.component.css']
})
export class StudentcarddetailsComponent {
  studentcard:any=[];
  constructor( private _activatedRoute:ActivatedRoute,private _studentcardService:StudentcardService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

       this._studentcardService.getstudentcard(data.id).subscribe(
          (data:any)=>{
            this.studentcard=data;
            console.log("data.",data);
          }

        )
      }
    )
  }

}
