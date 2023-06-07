import { TestBed } from '@angular/core/testing';

import { UpdatePostService } from './update-post.service';

describe('UpdatePostService', () => {
  let service: UpdatePostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
