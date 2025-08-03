import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { IUser } from '../../Models/iuser';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe , AsyncPipe ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {
  AllUsers !: Observable<IUser[]>;

  constructor(private userService: UserService, private _router: Router) {}

  ngOnInit() {
    this.AllUsers = this.userService.getAllUsers().pipe(
      map(users => users.filter(user => user.id > 4))
    );
  }
  
  RemoveUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          this.AllUsers = this.AllUsers.pipe(
            map(users => users.filter(user => user.id !== userId))
          );
        },
        error: (err) => {
          console.error(`Error user with ID ${userId}:`, err);
        }
      });
    }
  }

  ShowUserDetails(id: number) {
    this._router.navigateByUrl(`/Details/${id}`);
  }
}
