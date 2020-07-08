import { AppError } from './../common/app.error';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  http : HttpClient;
  url = "https://jsonplaceholder.typicode.com/posts";
  posts: any[];

  constructor(http : HttpClient, private postService: PostService) {
    this.http = http;    

    this.http.get(this.url).subscribe(Response => {
      this.posts = Response as any[];
    });
   }

  ngOnInit() {
  }

  createPost(inputField : HTMLInputElement) {
    if(!inputField.value){
      return;
    }

    let post = { userId: 1, title: inputField.value, body: "new post"}
    this.postService.create(post).subscribe(respone => {
      this.posts.unshift(respone);
    })      
  }

  updatePost(post){
    this.http.put(`${this.url}/${post.id}`, post).subscribe(respone => {
      console.log(respone);
    });
  }

}
