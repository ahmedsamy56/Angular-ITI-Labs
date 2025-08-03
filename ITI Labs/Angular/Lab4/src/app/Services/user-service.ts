import { Injectable } from '@angular/core';
import { IUser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`${environment.baseUrl}/users`);
  }
  getUserById(id: number): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.baseUrl}/users/${id}`);
  }
  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/users/${id}`);
  }
}
