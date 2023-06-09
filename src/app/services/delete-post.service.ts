import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface DeletePostResponse {
  deletePost: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DeletePostService {
  constructor(private apollo: Apollo) {}

  deletePost(id: number): Observable<DeletePostResponse | null | undefined> {
    const mutation = gql`
      mutation DeletePost($id: ID!) {
        deletePost(id: $id)
      }
    `;

    return this.apollo
      .mutate<DeletePostResponse>({
        mutation,
        variables: {
          id,
        },
      })
      .pipe(map((result) => result.data));
  }
}
