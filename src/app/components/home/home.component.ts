import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { UserModel } from 'src/app/Models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: UserModel[];

  constructor( private githubservice: GithubService) { }

  ngOnInit() {
    
  }

  getUsers(){
    this.githubservice.getData()
    .subscribe(data => this.users = data);
    
  }

}
