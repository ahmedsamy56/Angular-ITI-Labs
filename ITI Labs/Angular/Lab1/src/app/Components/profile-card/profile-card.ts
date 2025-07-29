import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [UpperCasePipe],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  img : string = 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg=';
  name : string = 'John Doe';
  jop : string = 'Web Developer';
  bio : string = 'Passionate about creating beautiful and functional websites Always learning explonng technoloqes';
  IsDisabled: boolean = false;

  MyAction():void{
    this.IsDisabled = true;
    alert("Removed Successfully");
  }
}
