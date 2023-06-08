import { Injectable } from '@angular/core';
import { User } from '../User';
import { UserUpdateService } from './user-update.service';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  currentUser: User | null = null;

  constructor(private userUpdateService: UserUpdateService) {}

  setCurrentUser(user: User) {
    this.currentUser = user;
    this.userUpdateService.notifyUserUpdate();
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
