import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  fetchUser(): Observable<User> {
    return this.apollo
      .watchQuery({
        query: gql`
          query {
            user(id: 1) {
              id
              username
              email
            }
          }
        `,
      })
      .valueChanges.pipe(map((result: any) => result.data.user));
  }
}
