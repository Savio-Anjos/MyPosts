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

  fetchUser(id: number): Observable<User> {
    return this.apollo
      .watchQuery({
        query: gql`
          query GetUser($id: ID!) {
            user(id: $id) {
              id
              username
              email
            }
          }
        `,
        variables: {
          id: id.toString(),
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.user));
  }
}
