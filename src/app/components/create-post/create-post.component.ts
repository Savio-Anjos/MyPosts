import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { Post } from 'src/app/Post';
import { CreatePostService } from 'src/app/services/create-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  inputValue?: string;

  postForm!: FormGroup;

  postCreated: Post = {
    id: 0,
    title: '',
    body: '',
  };

  doAction(action: string): void {
    console.log(`Do alert's action: ${action}`);
  }

  alertSucess: boolean = false;
  alertError: boolean = false;

  constructor(private createPostService: CreatePostService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.postForm.get('title')!;
  }

  get body() {
    return this.postForm.get('body')!;
  }

  submit() {
    if (this.postForm.invalid) {
      return;
    }

    const postInput = {
      title: this.title.value,
      body: this.body.value,
    };

    this.createPostService.createPost(postInput).subscribe(
      (
        response: FetchResult<any, Record<string, any>, Record<string, any>>
      ) => {
        this.postCreated = response.data.createPost;
        console.log('Post criado:', this.postCreated);
        this.alertSucess = true;
      },
      (error: ApolloError) => {
        console.log('Erro ao criar post:', error);
        this.alertError = true;
      }
    );
  }
}
