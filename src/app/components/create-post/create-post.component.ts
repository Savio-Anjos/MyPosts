import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  inputValue?: string;

  postForm!: FormGroup;

  constructor() {}

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
    console.log('Enviou formulário');
  }
}
