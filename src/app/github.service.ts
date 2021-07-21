import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './models/user';
import { combineLatest } from 'rxjs';
import { tap, map, switchMap, filter } from 'rxjs/operators';
import { IRepo } from './models/repo';

interface ISearchResponse{
  total_count:number,
  incomplete_results:false,
  items:IUser[]
}


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // inject httpservice client
  constructor(private http:HttpClient) { }

  searchUsers(query:string){
   return this.http.get<ISearchResponse>(`https://api.github.com/search/users?q=${query}`)
   .pipe(
     map(res=>res.items)
     );
  }
  getReposOfUser(username:string){
    return this.http.get<IRepo[]>(`https://api.github.com/users/${username}/repos`);
  }

  getUsers(){
    return this.http.get('http://api.github.com/users');
  }
}
