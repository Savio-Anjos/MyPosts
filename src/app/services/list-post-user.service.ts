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

  fetchPostsUser(): Observable<Post[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          query {
            user(id: 1) {
              posts {
                data {
                  id
                  title
                }
              }
            }
          }
        `,
      })
      .valueChanges.pipe(map((result: any) => result.data.user.posts.data));
  }
}
