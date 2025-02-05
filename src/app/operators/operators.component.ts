import { Component } from '@angular/core';
import { OperatorsService } from '../operators.service';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {

getUser$:any=this._operatorsService.getUser();
getPosts$:any=this._operatorsService.getPosts();

  constructor(private _operatorsService:OperatorsService){}

    ngOnInit(){
      forkJoin([this.getUser$,this.getPosts$])
      // .pipe(map(([user,posts])=>{
      //   return{
      //     user:user,
      //     posts:posts
      //   }
      // }))
      .subscribe((data:any)=>{
        console.log(data);
      })

    }
  
}
