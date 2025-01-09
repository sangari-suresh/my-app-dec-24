import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blog:any=[]
  constructor( private _blogservice:BlogService){
   _blogservice.getBlog().subscribe(
    (data:any)=>{
      this.blog=data;
      console.log(this.blog);
    }
   )
  }

}
