import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserStateService } from 'src/app/shared/user-state.service';

@Component({
  selector: 'app-list-posts-user',
  templateUrl: './list-posts-user.component.html',
  styleUrls: ['./list-posts-user.component.scss'],
})
export class ListPostsUserComponent {
  user?: User | null;

  constructor(private userStateService: UserStateService) {}

  get currentUser(): User | null {
    this.user = this.userStateService.getCurrentUser();
    return this.user;
  }
}
