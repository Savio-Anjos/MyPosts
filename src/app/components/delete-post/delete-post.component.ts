import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UserStateService } from 'src/app/shared/user-state.service';
import { ListPostUserService } from 'src/app/services/list-post-user.service';
import { UserUpdateService } from 'src/app/shared/user-update.service';

import { User } from 'src/app/User';
import { Post } from 'src/app/Post';
@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: [
    './delete-post.component.scss',
    '../update-post/update-post.component.scss',
  ],
})
export class DeletePostComponent implements OnInit, OnDestroy {
  deleteForm!: FormGroup;
  user?: User | null;
  postsUser: Post[] = [];
  buttonNewPost: boolean = false;
  textButton: string = 'deletar publicação';

  alertSucess: boolean = false;
  alertError: boolean = false;

  private userUpdateSubscription: Subscription = new Subscription();

  constructor(
    private userStateService: UserStateService,
    private listPostUserService: ListPostUserService,
    private userUpdateService: UserUpdateService
  ) {}

  ngOnInit(): void {
    this.deleteForm = new FormGroup({
      post: new FormControl('', Validators.required),
    });
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

  get post() {
    return this.deleteForm.get('post');
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

  submit() {
    if (this.deleteForm.invalid) {
      return;
    }

    this.buttonNewPost = true;
    this.alertSucess = true;
    this.textButton = 'deletar outra publicação';
  }

  changeButtonSubmit() {
    this.alertSucess = false;
    this.textButton = 'deletar publicação';
    this.buttonNewPost = false;
  }
}
