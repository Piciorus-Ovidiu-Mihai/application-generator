import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private basePath: string = environment.API_ENDPOINT;
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  public constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('user') || '{}')
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  public login(email: string, password: string): any {
    return this.http
      .post(this.basePath + '/users/login', {
        email: email,
        password: password,
      })
      .pipe(
        map((user: any) => {
          user.authdata = window.btoa(email + ':' + password);
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next({});
    this.router.navigate(['auth/login']);
  }

  public register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    confirmPassword: string
  ): any {
    return this.http.post(this.basePath + '/users/register', {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      firstName: firstName,
      lastName: lastName,
    });
  }
}
