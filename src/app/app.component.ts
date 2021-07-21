import { Component,Input } from '@angular/core'; 
import { GithubService } from './github.service';
import { IUser } from './models/user';
import { IRepo } from './models/repo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-users-search';
  users : IUser[]=[];
  repos : IRepo[]=[];


  /*we are creating property and type of property(its type is githubservice class)  
  then angular will create a instance githubservice and assign to property */

  constructor(private github : GithubService){
    // this.github.getUsers().subscribe((data) => {
    //   this.users=data;
    // });
  }

  // when we click on search button, it will call searchusers method, which will internally return data
  onSearchBtnClick(inputVal:string) {
    this.github.searchUsers(inputVal).subscribe(data =>{
      this.users=data
    });
  }

  onViewRepoBtnClick(user : IUser){
    this.github.getReposOfUser(user.login).subscribe(data =>{
      this.repos=data;
    });
  }

  callApi(){
    // this.users = this.github.getUsers();
  }
}
