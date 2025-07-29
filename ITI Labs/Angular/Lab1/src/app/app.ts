import { Component } from '@angular/core';
import { ProfileCard } from "./Components/profile-card/profile-card";

@Component({
  selector: 'app-root',
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Lab1';
}
