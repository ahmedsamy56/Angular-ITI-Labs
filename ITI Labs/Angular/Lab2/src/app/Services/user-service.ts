import { Injectable } from '@angular/core';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Users!: IUser[];
  FileredUsers!: IUser[];
  constructor() {

    this.Users = [

      {
        id: 3,
        Name: 'Khaled Ali',
        Bio: 'Passionate about creating beautiful and functional websites Always learning explonng technoloqes',
        JobTitle: 'Dot net Developer',
        ImgUrl: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
      },
      {
        id: 4,
        Name: 'Laila Hassan',
        Bio: 'Passionate about creating beautiful and functional websites Always learning explonng technoloqes',
        JobTitle: 'Dot net Developer',
        ImgUrl: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
      },
      {
        id: 5,
        Name: 'Amr Ibrahim',
        Bio: 'Passionate about creating beautiful and functional websites Always learning explonng technoloqes',
        JobTitle: 'Dot net Developer',
        ImgUrl: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
      },
      {
        id: 6,
        Name: 'Noha Abdallah',
        Bio: 'Passionate about creating beautiful and functional websites Always learning explonng technoloqes',
        JobTitle: 'Dot net Developer',
        ImgUrl: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
      },
      {
        id: 7,
        Name: 'Yasser Mostafa',
        Bio: 'Passionate about creating beautiful and functional websites Always learning explonng technoloqes',
        JobTitle: 'Dot net Developer',
        ImgUrl: 'https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg='
      }
    ];

   this.FileredUsers = this.Users;
  }

  GetAllUsers(): IUser[] {
    return this.FileredUsers;
  }

  DeleteUserById(id: number): IUser[] {
    this.FileredUsers = this.FileredUsers.filter(user => user.id !== id);
    return this.FileredUsers;
  }

  SearchEvent(text: string): IUser[] {
    this.FileredUsers = this.Users.filter(user =>
      user.Name.toLowerCase().includes(text.toLowerCase())
    );

    return this.FileredUsers;
  }
}