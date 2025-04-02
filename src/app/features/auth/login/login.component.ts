import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';


import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'gaia-login',
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule,
    ButtonModule,  InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router)
  http = inject(HttpClient);  
  authService = inject(AuthService);

  loginForm: FormGroup;
  errorMessage: string = "";
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  
  email: string = '';

  password: string = '';

  checked: boolean = false;

  onLogin() {
    this.router.navigate(['/']);
    // if (this.loginForm.invalid) {
    //     this.errorMessage = "Veuillez remplir tous les champs correctement.";
    //     return;
    // }

    // const { username, password } = this.loginForm.value;    
    // this.isLoading = true;
    // this.authService.login(username, password).subscribe({
    //     next: (response) => {
    //         if (response.token) {
    //             localStorage.setItem('token', response.token);
    //         }
            
    //         this.router.navigate(['/home']);
    //         this.isLoading = false; 
    //     },
    //     error: (error) => {
    //         console.error('Login error:', error);
    //         this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
    //         this.isLoading = false; 
    //     }
    // });
}

}
