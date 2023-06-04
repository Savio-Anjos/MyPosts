import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Post } from 'src/app/Post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  posts: Post[] = [];
  numberInput: number = 0;
  amountPosts: number = 60;
  isVisible = false;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  changeNumber() {
    this.amountPosts = this.numberInput;
    this.fetchPosts();
  }

  fetchPosts() {
    this.listService.fetchPosts(this.amountPosts).subscribe((posts) => {
      this.posts = posts;
    });
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
}
