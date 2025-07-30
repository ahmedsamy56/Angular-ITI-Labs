import { Component } from '@angular/core';
import { UserService } from './Services/user-service';
import { IUser } from './Models/iuser';
import { Card } from "./Components/card/card";
import { Search } from "./Components/search/search";

@Component({
  selector: 'app-root',
  imports: [Card, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users !: IUser[];

  constructor(private userService: UserService) {
    this.users = this.userService.GetAllUsers();
  }

  RemoveUser(id: number) {
   this.users = this.userService.DeleteUserById(id);
  }

  SearchUser(name : string) {
   this.users = this.userService.SearchEvent(name);
  }
}
