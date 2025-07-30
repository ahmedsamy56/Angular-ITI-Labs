import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { UserService } from '../../Services/user-service';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('SearchBar') searchInput!:ElementRef

  SearchUsers(event : Event){
    this.searchEvent.emit((event.target as HTMLInputElement)?.value);
  }
}
