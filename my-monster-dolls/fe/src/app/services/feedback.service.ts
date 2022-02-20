import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { IDoll } from '../models';
import { IFeedback } from '../models/feedback';
@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  private readonly baseUrl = 'http://localhost:3000/feedback';

  constructor(private http: HttpClient) {}

  public getDollFeedback(dollId: number) {
    return this.http.get<IFeedback[]>(`${this.baseUrl}?dollId=${dollId}`);
  }

  public findFeedbackItem(dollId: number, userId: number): Observable<IFeedback> {
    return this.http.get<IFeedback[]>(`${this.baseUrl}?dollId=${dollId}&userId=${userId}`).pipe(
      map(result => result[0])
    );
  }

  public addFeedbackItem(dollId: number, userId: number, feedback: Partial<IFeedback>) {
    return this.http.post<IFeedback>(`${this.baseUrl}`, {...feedback, dollId, userId});
  }

  public updateFeedbackItem(id: number, feedback: Partial<IFeedback>) {
    return this.http.patch<IFeedback>(`${this.baseUrl}/${id}`, feedback);
  }

  public updateDollFeedback(doll: IDoll, userId: number, feedback: Partial<IFeedback>): Observable<IFeedback> {
    return this.findFeedbackItem(doll.id, userId).pipe(
      switchMap((fb) => {
        return fb ? this.updateFeedbackItem(fb.id, feedback) : this.addFeedbackItem(doll.id, userId, feedback);
      })
    );
  }

}
