import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SearchComponent, AddUserComponent, EditUserComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  users: IUser[] = [];
  filteredUsers: IUser[] = [];
  searchTerm = '';
  showDeleteModal = false;
  userToDelete: IUser | null = null;
  userToEdit: IUser | null = null;

  ngOnInit() {
    this.loadUsersFromStorage();
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterUsers();
  }

  onUserAdded(newUser: IUser) {
    this.users.push(newUser);
    this.saveUsersToStorage();
    this.filterUsers();
  }

  onEditUser(user: IUser) {
    this.userToEdit = user;
  }

  onUserUpdated(updatedUser: IUser) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this.saveUsersToStorage();
      this.filterUsers();
    }
    this.userToEdit = null;
  }

  onEditModalClosed() {
    this.userToEdit = null;
  }

  onDeleteUser(user: IUser) {
    this.userToDelete = user;
    this.showDeleteModal = true;
  }

  confirmDelete() {
    if (this.userToDelete) {
      this.users = this.users.filter(user => user.id !== this.userToDelete!.id);
      this.saveUsersToStorage();
      this.filterUsers();
      this.closeDeleteModal();
    }
  }

  closeDeleteModal() {
    this.showDeleteModal = false;
    this.userToDelete = null;
  }


  private filterUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  private loadUsersFromStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.filteredUsers = [...this.users];
    }
  }

  private saveUsersToStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
} 