import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBlogPayload } from '../add-post/get-blog-payload';
import {PostService } from '../post.service';
import { PostInfoPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getBlogListPayload : GetBlogPayload;

//observalbe read response that is title,contents author name & status  which are define in post-payload.ts
//purposeof reating service is to write  logic of calling api from backend
  posts:Observable<Array<PostInfoPayload>>;
  
  //postService.ts is used inside constructor beacuase inside that we write calling api logic from backend
  constructor(private postService:PostService) {


    //here we intiliase  BlogListPyload by writing status published as user want to see only published blog
    //we intialise  BlogListPyload  inside home.component.ts because as user visit the website they must watch all 
    //blogs having status publised on home page only & that is reason we can't declare empty intiliasation of BlogListPyload
    //inside add-post.component.ts
    this.getBlogListPayload = {
    status:'PUBLISHED'
    }


   }

  ngOnInit(): void {
    //call to the getBlogList api on home page  which has logic inside getPostList() method insode PostServics class which is inside post.service.ts
    this.postService.getPostList(this.getBlogListPayload).subscribe((res : any) =>{
      
      //to print all blogs on home page
      console.log(res);
      console.log("welcome to home page");
      this.posts = res;
    }, error => {
      alert("Unable to fetch records");
    
    })


  }

}
