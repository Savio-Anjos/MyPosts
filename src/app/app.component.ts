import { Component } from '@angular/core';
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
    name: '',
    email: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.fetchUser().subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
