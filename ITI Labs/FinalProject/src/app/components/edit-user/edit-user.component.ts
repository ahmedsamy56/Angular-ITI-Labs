import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit, OnChanges {
  @Input() user: IUser | null = null;
  @Output() userUpdated = new EventEmitter<IUser>();
  @Output() modalClosed = new EventEmitter<void>();
  
  showModal = false;
  editUserForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.patchForm();
      this.openModal();
    }
  }

  initForm() {
    this.editUserForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  patchForm() {
    this.editUserForm.patchValue({
      id: this.user!.id,
      name: this.user!.name,
      email: this.user!.email
    });
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.modalClosed.emit();
  }

  updateUser() {
    if (this.editUserForm.valid) {
      this.userUpdated.emit(this.editUserForm.value);
      this.closeModal();
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.editUserForm.controls).forEach(key => {
      const control = this.editUserForm.get(key);
      control?.markAsTouched();
    });
  }

  get name() {
    return this.editUserForm.get('name');
  }

  get email() {
    return this.editUserForm.get('email');
  }
} 