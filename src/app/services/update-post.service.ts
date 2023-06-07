import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Post } from '../Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdatePostService {
  constructor(private apollo: Apollo) {}
  updatePost(id: any, input: any): Observable<MutationResult<Post>> {
    const mutation = gql`
      mutation ($id: ID!, $input: UpdatePostInput!) {
        updatePost(id: $id, input: $input) {
          id
          body
        }
      }
    `;
    return this.apollo.mutate<Post>({
      mutation,
      variables: {
        id,
        input,
      },
    });
  }
}
