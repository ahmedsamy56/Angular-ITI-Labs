import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<IUser>();
  
  showModal = false;
  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.resetForm();
  }

  addUser() {
    if (this.addUserForm.valid) {
      const newUser: IUser = {
        id: this.generateRandomId(),
        name: this.addUserForm.get('name')?.value,
        email: this.addUserForm.get('email')?.value
      };
      this.userAdded.emit(newUser);
      this.closeModal();
    } else {
      this.markFormGroupTouched();
    }
  }

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000) + 1;
  }

  private resetForm() {
    this.addUserForm.reset();
  }

  private markFormGroupTouched() {
    Object.keys(this.addUserForm.controls).forEach(key => {
      const control = this.addUserForm.get(key);
      control?.markAsTouched();
    });
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }
} 