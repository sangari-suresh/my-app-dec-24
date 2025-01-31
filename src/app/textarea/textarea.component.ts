import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input() max:number=0;

  text:string='';
  textCount:number=0;

  onTextchange(event:any){
    this.textCount=this.text.length;
    if(this.textCount==this.max){
      alert("you have reached maximum characters");
    }else{
      return;
    }
  }
}
