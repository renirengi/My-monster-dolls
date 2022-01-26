import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';
import { map, Observable } from 'rxjs';
import * as sha256 from 'crypto-js/sha256';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  private _currentUser: IUser|null = null;

  get currentUser(): IUser|null {
    return this._currentUser;
  }

  private readonly baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public getUser(id: number): Observable<IUser> {
    const url = `${this.baseUrl}/${id.toString()}`;

    return this.http.get<IUser>(url);
  }

  public addUser(user: IUser): any {
    const url = `${this.baseUrl}`;
    const password = sha256(user.password).toString();

    return this.http.post<IUser>(url, {...user, password});
  }

  public findUsersByEmail(email: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}?email=${email}`);
  }

  public updateUser() {}

  public loginUser(email: string, password: string): Observable<IUser|null> {
    return this.findUsersByEmail(email).pipe(
      map(([user]) => {
        if (user.password === sha256(password).toString()) {
          this._currentUser = user;
          return user;
        }
        return null;
      })
    );
  }

  public logOutUser(): void {
    this._currentUser = null;
  }
}
