
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostInfoPayload } from '../add-post/post-payload';
import { PostService } from '../post.service';
import { GetBlogPayload } from '../add-post/get-blog-payload'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {


  getBlogListPayload : GetBlogPayload;
  
  publishBloagPayload : GetBlogPayload;

  posts: Observable<Array<PostInfoPayload>>;

  constructor(private postService:PostService,private router:Router) 
  {
    
    this.getBlogListPayload = 
    {
      status:'DRAFT'
    }


    this.getBlogListPayload =
    {
      status:'PUBLISHED'
    }
  }

  ngOnInit(): void 
  {
    this.postService.getPostList(this.getBlogListPayload ).subscribe((res:any)=>
      {
        console.log(res);
        this.posts = res;
      },
      error =>
      {
        alert("Unable to fetch records.");
      
      })
  }  
  
    
    
    
    
    
    
    publishBloag(id)
    {
      console.log(id);
      this.postService.publishBlog(id,this.publishBloagPayload).subscribe((res:any)=>
      {
       this.router.navigateByUrl("/home");
      },
      error =>
      {
        alert("Unable to fetch records.");
      
      })
    }  

}
