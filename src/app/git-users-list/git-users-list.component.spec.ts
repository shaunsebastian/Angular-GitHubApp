import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUsersListComponent } from './git-users-list.component';

describe('GitUsersListComponent', () => {
  let component: GitUsersListComponent;
  let fixture: ComponentFixture<GitUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
