import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient :HttpClient) { }
    
  
  private baseUrl ="http://localhost:8000/api/";

  //get post list

  getPostList()
   }
}
