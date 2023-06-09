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

  alertSuccess: boolean = false;
  alertError: boolean = false;
  isVisible = false;

  buttonNewPost: boolean = false;

  constructor(private createPostService: CreatePostService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
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
        this.alertSuccess = true;
        this.alertError = false;
        this.buttonNewPost = true;
        this.postForm.reset();
      },
      (error: ApolloError) => {
        console.log('Erro ao criar post:', error);
        this.alertError = true;
      }
    );
  }

  showModal(): void {
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

  changeButtonSubmit() {
    this.alertSuccess = false;
    this.buttonNewPost = false;
  }
}
