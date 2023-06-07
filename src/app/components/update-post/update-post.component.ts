import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss'],
})
export class UpdatePostComponent {
  updateForm!: FormGroup;

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      post: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  get post() {
    return this.updateForm.get('post')!;
  }

  get body() {
    return this.updateForm.get('body')!;
  }

  submit() {
    if (this.updateForm.invalid) {
      return;
    }

    console.log('Formulário enviado');
  }
}
