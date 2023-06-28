import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<firebase.default.User>;
  public currentUser: any;

  public constructor(
    protected readonly firebaseAuth: AngularFireAuth,
    protected readonly firestore: AngularFirestore,
    protected readonly router: Router
  ) {
    this.user = firebaseAuth.authState;
  }

  public signup(email: string, password: string): void {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value: any) => {
        let user = {
          id: value.user.uid,
          username: value.user.email,
          role: 'user',
        };
        this.firestore
          .collection('users')
          .add(user)
          .then((user: any) => {
            user.get().then((x) => {
              this.currentUser = x.data();
            });
          })
          .catch((err: any) => {
            console.log(err);
          });
        console.log('Success!', value);
      })
      .catch((err: any) => {
        console.log('Something went wrong:', err.message);
      });
  }

  public login(email: string, password: string): void {
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password))
      .pipe(finalize(() => this.router.navigateByUrl('/')))
      .toPromise();
  }

  public logout(): void {
    return from(this.firebaseAuth.signOut())
      .pipe(finalize(() => this.router.navigateByUrl('auth/login')))
      .toPromise();
  }

  public getUserEmail(): Promise<any> {
    return this.firebaseAuth.user
      .pipe(
        take(1),
        map((r) => r.providerData[0].email)
      )
      .toPromise();
  }

  async getUserRole(): Promise<any> {
    const currentUserEmail = await this.getUserEmail();

    if (!currentUserEmail) return from('').toPromise();

    return this.firestore
      .collection('users')
      .ref.where('username', '==', currentUserEmail)
      .get()
      .then(
        (res) =>
          res.docs.map((d) => {
            const data: any = d.data();
            const id = d.id;
            (data as any).id = id;
            return data.role;
          })[0]
      );
  }
}
