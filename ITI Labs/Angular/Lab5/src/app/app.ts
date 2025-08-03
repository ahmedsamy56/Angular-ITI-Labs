import { Component } from '@angular/core';
import { Signup } from "./components/signup/signup";

@Component({
  selector: 'app-root',
  imports: [Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Lab5';
}
