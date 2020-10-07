import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostInfoPayload } from './post-payload';
import { PostService } from '../post.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addpostForm:FormGroup;

  postPayload:PostInfoPayload;
  

  constructor(private formBuilder: FormBuilder,private localStorage:LocalStorageService,private postService:PostService,private router:Router) {
    this.addpostForm=this.formBuilder.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]]

    })

  this.postPayload = {
    contents:'',
    title:'',
    status:'',
    user_id:0,
    first_name:'',
    email:''

    }

   }

  ngOnInit(): void {
  }
  
  addPost() {
    this.postPayload.contents = this.addpostForm.get('content').value;
    this.postPayload.title = this.addpostForm.get('title').value;
    this.postPayload.status = 'PUBLISHED';
    this.postPayload.user_id = this.localStorage.retrieve('loginData').id;
    this.postPayload.first_name = this.localStorage.retrieve('loginData').first_name;
    console.log(this.postPayload);



    //call api here
    this.postService.addPost(this.postPayload).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/home");

    } ,error => {
      alert('Unsuccessfull');
    
    })
  }
}
