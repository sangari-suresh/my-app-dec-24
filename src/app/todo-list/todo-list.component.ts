import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
Text:string='';
todos:{text:string,done:boolean}[]=[];

add(){
  if(this.Text !==''){
    this.todos.push({text: this.Text,done:false});
    this.Text='';
  }
}
remove(index:number){
  this.todos.splice(index,1);
}
}
