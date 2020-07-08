import { AppError } from './../common/app.error';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];
  constructor(private gitHub: GithubService) { }

  ngOnInit() {
    this.gitHub.getFollowers()
      .subscribe(response => {
        this.followers = response as any[];
        console.log(response);
      }, (err: AppError) => {
        if (err.status === 404) {
          alert('User was not found.');
        }
      });
  }

}
