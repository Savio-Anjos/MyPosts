import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostsUserComponent } from './list-posts-user.component';

describe('ListPostsUserComponent', () => {
  let component: ListPostsUserComponent;
  let fixture: ComponentFixture<ListPostsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPostsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPostsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
