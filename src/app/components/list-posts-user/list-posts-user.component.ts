import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { Post } from 'src/app/Post';
import { UserStateService } from 'src/app/shared/user-state.service';
import { ListPostUserService } from 'src/app/services/list-post-user.service';

@Component({
  selector: 'app-list-posts-user',
  templateUrl: './list-posts-user.component.html',
  styleUrls: ['./list-posts-user.component.scss'],
})
export class ListPostsUserComponent {
  user?: User | null;
  postsUser: Post[] = [];

  constructor(
    private userStateService: UserStateService,
    private listPostUserService: ListPostUserService
  ) {}

  get currentUser(): User | null {
    this.user = this.userStateService.getCurrentUser();
    return this.user;
  }

  ngOnInit() {
    this.fetchPostsUser();
  }

  fetchPostsUser() {
    this.listPostUserService.fetchPostsUser().subscribe((posts) => {
      this.postsUser = posts;
    });
  }
}
