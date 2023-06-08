import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/User';
import { Post } from 'src/app/Post';

import { UserStateService } from 'src/app/shared/user-state.service';
import { UserUpdateService } from 'src/app/shared/user-update.service';
import { ListPostUserService } from 'src/app/services/list-post-user.service';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-posts-user',
  templateUrl: './list-posts-user.component.html',
  styleUrls: [
    './list-posts-user.component.scss',
    '../list/list.component.scss',
  ],
})
export class ListPostsUserComponent implements OnInit, OnDestroy {
  user?: User | null;
  postsUser: Post[] = [];
  detailsPost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  isVisible = false;

  private userUpdateSubscription: Subscription = new Subscription();

  constructor(
    private userStateService: UserStateService,
    private listPostUserService: ListPostUserService,
    private listService: ListService,
    private userUpdateService: UserUpdateService
  ) {}

  ngOnInit() {
    this.fetchPostsUser(Number(this.currentUser?.id));

    this.userUpdateSubscription = this.userUpdateService.userUpdate$.subscribe(
      () => {
        this.fetchPostsUser(Number(this.currentUser?.id));
      }
    );
  }

  ngOnDestroy(): void {
    this.userUpdateSubscription.unsubscribe();
  }

  get currentUser(): User | null {
    this.user = this.userStateService.getCurrentUser();
    return this.user;
  }

  fetchPostsUser(id: number) {
    this.listPostUserService.fetchPostsUser(id).subscribe((posts) => {
      this.postsUser = posts;
    });
  }

  fetchOnePost(id: number) {
    this.listService.fetchOnePost(id).subscribe((post) => {
      this.detailsPost = post;
    });
  }

  showModal(id: number): void {
    this.fetchOnePost(id);
    this.isVisible = true;
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
