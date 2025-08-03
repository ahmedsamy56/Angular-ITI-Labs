import { Component } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { IUser } from '../../Models/iuser';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  AllUsers !: IUser[] ;
  constructor(private userService: UserService , private _router:Router) {
    this.AllUsers = this.userService.GetAllUsers();
  }

  
  RemoveUser(userId: number) {
    this.userService.RemoveUserById(userId);
    this.AllUsers = this.userService.GetAllUsers();
  }


  ShowUserDetails(id: number) {
    this._router.navigateByUrl(`/Details/${id}`)
  }
}
