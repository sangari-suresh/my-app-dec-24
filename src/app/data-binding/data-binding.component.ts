import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name:string="Dinesh";
  age:number=28;
  email:string="connect@dineshuyyala.com";

  // user:any={
  // name:"Dinesh",
  // age:28,
  // email:"connect@dineshuyyala.com",
  // }

 isIndian:boolean=false;

 phone:string="+91"

 num1:number=0;
 num2:number=0;
 result:number=0;

 sum(){
  this.result=this.num1+this.num2;
  console.log(this.result);
 }


  submit(){
    alert("Clicked submit button")
  }
  typing(){
    alert("Typing...............")
  }

}
