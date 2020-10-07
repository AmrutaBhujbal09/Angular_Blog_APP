import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { GetBlogPayload } from './add-post/get-blog-payload';
import { PostInfoPayload } from './add-post/post-payload';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient :HttpClient) { }
      
  private baseUrl ="http://localhost:8000/";

  //get post list
  getPostList(getBlogPayload:GetBlogPayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'api/blog/getBlogList', getBlogPayload , { headers:headers });
  }


//save post list
  addPost(postPayload:PostInfoPayload):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'api/blog/createblog',postPayload, { headers:headers });

  }

  //get post by id
  getPostById(id:number):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.baseUrl + 'api/blog/getBlogDetils' + id , { headers:headers });

  }
}

