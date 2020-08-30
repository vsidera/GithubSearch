import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserModel } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  url:string = "https://api.github.com/users"
  usersLimit = '?_limit=5'

  constructor(private http: HttpClient) { }

  getData():Observable<UserModel[]>{

     return this.http.get<UserModel[]>(`${this.url}${this.usersLimit}`);
  }
}
