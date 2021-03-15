import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  registerUser(event: Event) {
    event.preventDefault();
    if (this.registerForm.valid) {
      const value = this.registerForm.value;
      this.authService.createUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
    }
  }
}
