import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/Post';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private apollo: Apollo) {}

  fetchPosts(amountPosts: number): Observable<Post[]> {
    const options = {
      options: {
        paginate: {
          page: 1,
          limit: amountPosts,
        },
      },
    };

    return this.apollo
      .watchQuery({
        query: gql`
          query GetPosts($options: PageQueryOptions) {
            posts(options: $options) {
              data {
                id
                title
              }
              meta {
                totalCount
              }
            }
          }
        `,
        variables: options,
      })
      .valueChanges.pipe(map((result: any) => result.data.posts.data));
  }

  fetchOnePost(id: number): Observable<Post> {
    return this.apollo
      .watchQuery({
        query: gql`
          query GetPost($id: ID!) {
            post(id: $id) {
              id
              title
              body
            }
          }
        `,
        variables: {
          id: id.toString(),
        },
      })
      .valueChanges.pipe(map((result: any) => result.data.post));
  }
}
