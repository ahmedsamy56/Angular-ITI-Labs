import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user-service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../Models/iuser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details implements OnInit {
  user !: IUser;
  constructor(private userService: UserService , private _activatedRouter:ActivatedRoute, private location: Location) {

  }


  ngOnInit() {
    const userId = this._activatedRouter.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(+userId).subscribe({
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          console.error('Error', err);
          this.location.back();
        }
      });
    } else {
      this.location.back();
    }
  }


  goBack() {
    this.location.back();
  }
}
