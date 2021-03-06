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
  login: string;

  constructor( private githubservice: GithubService) { }

  ngOnInit() {
    this.githubservice.getData()
    .subscribe(data => this.users = data);
  }

  getUsers(){
    
    
  }

  Search(){
    if (this.login != ""){
      this.users = this.users.filter(res => {
        return res.login.toLocaleLowerCase().match(this.login.toLocaleLowerCase());
      });
    }
    else if (this.login == ""){
      this.ngOnInit();
    }
   
  }

}
