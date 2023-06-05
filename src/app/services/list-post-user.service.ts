import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/Post';

@Injectable({
  providedIn: 'root',
})
export class ListPostUserService {
  constructor(private apollo: Apollo) {}

  fetchPostsUser(id: number): Observable<Post[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query GetPostsUser($id: ID!) {
            user(id: $id) {
              posts {
                data {
                  id
                  title
                }
              }
            }
          }
        `,
        variables: {
          id: id.toString(),
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.user.posts.data));
  }
}
