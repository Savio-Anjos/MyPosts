import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: [
    './delete-post.component.scss',
    '../update-post/update-post.component.scss',
  ],
})
export class DeletePostComponent implements OnInit {
  deleteForm!: FormGroup;

  buttonNewPost: boolean = false;
  textButton: string = 'deletar publicação';

  alertSucess: boolean = false;
  alertError: boolean = false;

  ngOnInit(): void {
    this.deleteForm = new FormGroup({
      post: new FormControl('', Validators.required),
    });
  }

  get post() {
    return this.deleteForm.get('post');
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
