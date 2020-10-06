import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  addpostForm:FormGroup;

  

  constructor(private formBuilder: FormBuilder) {
    this.addpostForm=this.formBuilder.group({
      title:['',[Validators.required]],
      content:['',[Validators.required]]

    })
   }

  ngOnInit(): void {
  }
  
  addPost() {
    console.log(this.addpostForm.get('title').value);
    console.log(this.addpostForm.get('content').value);
  }
}
