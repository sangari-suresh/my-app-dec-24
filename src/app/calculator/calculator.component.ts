import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  a:number=0;
  b:number=0;
  result:number=0;

 ADD(){
  this.result=this.a+this.b;
  console.log(this.result);
 }

 SUB(){
  this.result=this.a-this.b;
  console.log(this.result);
 }

 MUL(){
  this.result=this.a*this.b;
  console.log(this.result);
 }

 DIV(){
  this.result=this.a/this.b;
  console.log(this.result);
 }

}
