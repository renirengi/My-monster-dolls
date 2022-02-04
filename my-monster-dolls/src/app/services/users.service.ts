import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';
import { BehaviorSubject, firstValueFrom, map, Observable, of, tap } from 'rxjs';
import { CookieService } from './cookie.service';
//import * as sha256 from 'crypto-js/sha256';

const hashFunc = (str: string) => str;

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private readonly cookieName = 'curUsr';

  private _currentUser$ = new BehaviorSubject<IUser|null>(null);

  get currentUser$(): BehaviorSubject<IUser|null> {
    return this._currentUser$;
  }

  private readonly baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.restoreUser();
  }

  public getUser(id: number): Observable<IUser> {
    const url = `${this.baseUrl}/${id.toString()}`;

    return this.http.get<IUser>(url);
  }

  public addUser(user: IUser): any {
    const url = `${this.baseUrl}`;
    const password = hashFunc(user.password);

    return this.http.post<IUser>(url, {...user, password});
  }

  public findUsersByEmail(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}?email=${email}`);
  }

  public updateUser(user: IUser) {
    const url = `${this.baseUrl}/${user.id}`;

    return this.http.patch<IUser>(url, user).pipe(
      tap((user)=> this._currentUser$.next(user))
    );
  }

  public loginUser(email: string, password: string): Observable<IUser|null> {
    if (email === '' || password === '') {
      return of(null);
    }

    return this.findUsersByEmail(email).pipe(
      map(([user]) => user?.password === hashFunc(password) ? user : null),
      tap((user) => user && this.onUserUpdate(user))
    );
  }

  public logOutUser(): void {
    this.onUserUpdate(null);
  }

  public onUserUpdate(user: IUser | null): void {
    if (user) {
      const sameSite = 'strict';
      const expires = this.cookies.getExpiritonDate(1);

      this.cookies.setCookie(this.cookieName, user.id.toString(), { expires, sameSite })
    } else {
      this.cookies.deleteCookie(this.cookieName)
    }

    this._currentUser$.next(user)
  }

  private async restoreUser() {
    const userID = this.cookies.getCookie(this.cookieName);

    if (userID) {
      const currentUser = await firstValueFrom(this.getUser(+userID));

      this.currentUser$.next(currentUser);
    }
  }

}
