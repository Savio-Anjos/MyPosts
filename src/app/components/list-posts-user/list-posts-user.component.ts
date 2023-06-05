import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { Post } from 'src/app/Post';
import { UserStateService } from 'src/app/shared/user-state.service';
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
export class ListPostsUserComponent {
  user?: User | null;
  postsUser: Post[] = [];
  detailsPost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  isVisible = false;

  constructor(
    private userStateService: UserStateService,
    private listPostUserService: ListPostUserService,
    private listService: ListService
  ) {}

  ngOnInit() {
    this.fetchPostsUser(Number(this.currentUser?.id));
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

  showPosts() {
    this.fetchPostsUser(Number(this.currentUser?.id));
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
