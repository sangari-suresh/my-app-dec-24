import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  age:number=30;
  // varaiblename:datatype==intialvalue

  ages:number[]=[20,30,40,50,60];

  state:string="Telangana";
  states:string[]=["telangana,andhrapradesh,karanataka,tamilnadu,kerala"];

  products:any[]=[
    {productName:'book',price:50},
    {productName:'shirt',price:5000},
    {productName:'mobile',price:50000},
    {productName:'bike',price:500000},
    {productName:'car',price:5000000},
  ];
  
  today:any= new Date();


}
