import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  a:number=0;
  result:number=0;

  area(){
    this.result=3.14*this.a;
    console.log(this.result);
   }
   perimeter(){
    this.result=2*3.14*this.a;
    console.log(this.result);
   }

}
