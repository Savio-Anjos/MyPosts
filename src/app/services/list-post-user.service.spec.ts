import { TestBed } from '@angular/core/testing';

import { ListPostUserService } from './list-post-user.service';

describe('ListPostUserService', () => {
  let service: ListPostUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPostUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
