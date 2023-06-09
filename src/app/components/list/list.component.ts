import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/Post';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  posts: Post[] = [];
  idPost = 0;
  detailsPost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  numberInput: number = 0;
  amountPosts: number = 3;
  isVisible = false;

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  changeNumber() {
    this.amountPosts = this.numberInput;
    this.fetchPosts();
    this.numberInput = 0;
  }

  fetchPosts() {
    this.listService.fetchPosts(this.amountPosts).subscribe((posts) => {
      this.posts = posts;
    });
  }

  fetchOnePost(id: number) {
    this.listService.fetchOnePost(id).subscribe((post) => {
      this.detailsPost = post;
    });
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
