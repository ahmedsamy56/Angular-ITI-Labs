import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { IUser } from '../../Models/iuser';

@Component({
  selector: 'app-card',
  imports: [UpperCasePipe],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() user !: IUser;
  @Input() LastElement: boolean = false;

  @Output() removeUserEvent: EventEmitter<number> = new EventEmitter<number>();

  RemoveUser() {
    this.removeUserEvent.emit(this.user.id);
  }
}
