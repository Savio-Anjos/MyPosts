import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class CreatePostService {
  constructor(private apollo: Apollo) {}
  createPost(input: any) {
    const mutation = gql`
      mutation ($input: CreatePostInput!) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `;

    return this.apollo.mutate({
      mutation,
      variables: {
        input,
      },
    });
  }
}
