import { TestBed } from '@angular/core/testing';

import { DeletePostService } from './delete-post.service';

describe('DeletePostService', () => {
  let service: DeletePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
