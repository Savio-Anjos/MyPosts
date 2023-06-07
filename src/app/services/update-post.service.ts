import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface UpdatePostResponse {
  id: number;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class UpdatePostService {
  constructor(private apollo: Apollo) {}

  updatePost(id: number, body: string): Observable<any> {
    const mutation = gql`
      mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
        updatePost(id: $id, input: $input) {
          id
          body
        }
      }
    `;

    return this.apollo
      .mutate<UpdatePostResponse>({
        mutation,
        variables: {
          id,
          input: {
            body,
          },
        },
      })
      .pipe(map((result) => result.data));
  }
}
