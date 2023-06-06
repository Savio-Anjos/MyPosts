import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Post } from '../Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreatePostService {
  constructor(private apollo: Apollo) {}
  createPost(input: any): Observable<MutationResult<Post>> {
    const mutation = gql`
      mutation ($input: CreatePostInput!) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `;

    return this.apollo.mutate<Post>({
      mutation,
      variables: {
        input,
      },
    });
  }
}
