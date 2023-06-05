import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  currentUser: User | null = null;

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
