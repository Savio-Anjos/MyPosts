import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { UserStateService } from 'src/app/shared/user-state.service';
import { ListPostUserService } from 'src/app/services/list-post-user.service';
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

  constructor(
    private userService: UserService,
    private userStateService: UserStateService,
    private listPostUserService: ListPostUserService
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

  submit() {
    if (this.updateForm.invalid) {
      return;
    }

    console.log('Formulário enviado');
  }
}
