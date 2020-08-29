import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserModel } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url = "https://api.github.com/users"

  constructor(private http: HttpClient) { }

  getData():Observable<UserModel[]>{

     

     return this.http.get<any>(this.url)
  }
}
