import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeletePostService {
  constructor(private apollo: Apollo) {}

  deletePost(id: number) {
    const mutation = gql`
      mutation DeletePost($id: ID!) {
        deletePost(id: $id)
      }
    `;

    return this.apollo
      .mutate({
        mutation,
        variables: {
          id,
        },
      })
      .pipe(map((result) => result.data));
  }
}
