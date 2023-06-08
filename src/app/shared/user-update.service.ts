import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserUpdateService {
  private userUpdateSubject = new Subject<void>();

  userUpdate$ = this.userUpdateSubject.asObservable();

  notifyUserUpdate() {
    this.userUpdateSubject.next();
  }
}
