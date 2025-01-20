import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  flipkart:any = [
    {ProductName: 'pen', Price: 10, Rating: 3, FreeDelivery:'true'},
    {ProductName: 'phone', Price: 100, Rating: 2, FreeDelivery:'false'},
    {ProductName: 'shirt', Price: 400, Rating: 4, FreeDelivery:'true'},
   {ProductName: 'cap', Price: 200, Rating: 5, FreeDelivery:'false'},
   {ProductName: 'mobile case', Price: 300, Rating: 2, FreeDelivery:'true'},
    {ProductName: 'remote', Price: 400, Rating: 2.5, FreeDelivery:'false'}
  ];
  delete(i:number){
    this.flipkart.splice(0,1)
  }

  text:string="";
 search(){
  this.flipkart=this.flipkart.filter((flipkart:any)=>flipkart.ProductName.includes(this.text))
 }
  
filter(){
  this.flipkart=this.flipkart.filter((flipkart:any)=>flipkart.FreeDelivery.includes(true))
}
  sort1(){
    this.flipkart.sort((a:any,b:any)=>a.Price-b.Price)
  }
  sort2(){
    this.flipkart.sort((a:any,b:any)=>b.Price-a.Price)
  }

  sort3(){
    this.flipkart.sort((a:any,b:any)=>a.Rating-b.Rating)
  }
  sort4(){
    this.flipkart.sort((a:any,b:any)=>b.Rating-a.Rating)
  }
  
  discount(){
    this.flipkart=this.flipkart.map((flipkart:any)=>{
      flipkart.Price=(flipkart.Price/2);
      return flipkart;
    })
  }

  charges(){
    this.flipkart=this.flipkart.filter((flipkart:any)=>flipkart.FreeDelivery.includes(false));
    console.log(this.flipkart);
    this.flipkart=this.flipkart.map((flipkart:any)=>{
      flipkart.Price=flipkart.Price+50;
      return flipkart;
    })
  }

  total1(){
    let total=this.flipkart.reduce((sum:any,flipkart:any)=>sum+flipkart.Price,0)
    alert(total)
  }
 total2(){
  let total=this.flipkart.reduce((sum:any,flipkart:any)=>this.flipkart.length)
 alert(total)    
 }

 name:string='';
 Price:number=0;
 Rating:number=0;
 yes:boolean=true;
 no:boolean=false;
 FreeDelivery:string='';

 add(){
  let flipkart={
  ProductName:this.name,
  Price:this.Price,
  Rating:this.Rating,
  FreeDelivery:this.FreeDelivery

  };
  this.flipkart.unshift(flipkart);

}

}