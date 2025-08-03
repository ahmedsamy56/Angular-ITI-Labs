import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

  get email() {
    return this.myForm.get('email')!;
  }

  get password() {
    return this.myForm.get('password')!;
  }

  get userName() {
    return this.myForm.get('userName')!;
  }

  submit(): void {
    if (this.myForm.invalid) {
      console.log('Form is invalid');
      return;
    }
    
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
