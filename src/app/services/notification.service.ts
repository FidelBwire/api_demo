import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notification = new BehaviorSubject<string>('');

  public showNotification(message: string) {
    this.notification.next(message);
  }

  public getNotification(): Observable<string> {
    return this.notification.asObservable();
  }
}
