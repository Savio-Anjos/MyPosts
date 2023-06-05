import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from './shared/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  user: User = {
    id: '',
    username: '',
    email: '',
  };

  userId: number = 1;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchUser(this.userId);
  }

  randomId() {
    this.userId = Math.floor(Math.random() * 10) + 1;
    this.fetchUser(this.userId);
  }

  fetchUser(id: number) {
    this.userService.fetchUser(id).subscribe((user) => {
      this.user = user;
      this.cdr.detectChanges();
    });
  }
}
