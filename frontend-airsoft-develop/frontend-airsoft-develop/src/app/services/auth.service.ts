import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Credentials, User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private usernameSubject = new BehaviorSubject<string | null>(null);

  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  getUsername$: Observable<string | null> = this.usernameSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    console.log('AuthService initialized. Token:', token, 'Username:', username);
    if (token && username) {
      this.isLoggedInSubject.next(true);
      this.usernameSubject.next(username);
    }
  }

  login(credentials: Credentials): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
    tap(response => {
      console.log('Login response:', response);
      if (response && response.JWT && response.username) {
        this.isLoggedInSubject.next(true);
        this.usernameSubject.next(response.username);
        localStorage.setItem('token', response.JWT); // Store the JWT token
        localStorage.setItem('username', response.username); // Store the username
      }
    })
  );
}

  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/usuarios/signup`, user).pipe(
      tap(response => {
        // handle successful registration if needed
      })
    );
  }

  logout(): void {
    this.http.post(`${this.baseUrl}/logout`, {}).subscribe(() => {
      console.log('Logged out');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.isLoggedInSubject.next(false);
      this.usernameSubject.next(null);
    });
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
