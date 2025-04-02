import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  router = inject(Router)
  private baseUrl = `${environment.BASE_URL}/auth`;
  constructor(private http: HttpClient) { }

  signup(username: string, password: string, fullName: string): Observable<any> {
    const payload = {
      username,
      password,
      fullName
    };
    return this.http.post(`${this.baseUrl}/signup`, payload);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {
      username,
      password
    });
  }

  updatePassword(phoneNumber: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/forget-password/${phoneNumber}`,{});
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
