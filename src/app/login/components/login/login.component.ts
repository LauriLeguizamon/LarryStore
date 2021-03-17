import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { this.buildForm() }

  ngOnInit(): void {
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  loginUser(event: Event) {
    event.preventDefault();
    if(this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService.loginUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin/products']);
      })
      .catch(err => {
        alert('Las credenciales no son validas')
      })
    } 
  }

}
