import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApolloError } from '@apollo/client/core';

import { UserService } from 'src/app/shared/user.service';
import { UserStateService } from 'src/app/shared/user-state.service';
import { ListPostUserService } from 'src/app/services/list-post-user.service';
import { UpdatePostService } from 'src/app/services/update-post.service';

import { User } from 'src/app/User';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss'],
})
export class UpdatePostComponent {
  updateForm!: FormGroup;
  user?: User | null;
  postsUser: Post[] = [];

  updatedPost: Post = {
    id: 0,
    title: '',
    body: '',
  };

  postId: number = 0;

  error?: string;

  alertSucess: boolean = false;
  alertError: boolean = false;

  constructor(
    private userService: UserService,
    private userStateService: UserStateService,
    private listPostUserService: ListPostUserService,
    private updatePostService: UpdatePostService
  ) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      post: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
    this.fetchPostsUser(Number(this.currentUser?.id));
  }

  get post() {
    return this.updateForm.get('post')!;
  }

  get body() {
    return this.updateForm.get('body')!;
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

  searchPostId(event: any) {
    const value = event.target.value;
    this.postId = Number(value);
  }

  submit() {
    if (this.updateForm.invalid) {
      return;
    }

    const postId = this.postId;
    const body = this.updateForm.get('body')!.value;

    this.updatePostService.updatePost(postId, body).subscribe(
      (result) => {
        this.updatedPost = result.updatePost;
        this.alertSucess = true;
        console.log('Post atualizado:', this.updatedPost);
      },
      (error: ApolloError) => {
        this.error = error.message;
        this.alertError = true;
        console.error('Erro ao atualizar o post:', error);
      }
    );
  }
}
