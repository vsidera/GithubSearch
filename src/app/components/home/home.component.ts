import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: string[];

  constructor( private githubservice: GithubService) { }

  ngOnInit(): void {
  }
  getUsers(){

    this.githubservice.getData().subscribe((data) => {
      console.log (data) ;
      // this.users = data;
    })
  }

}
