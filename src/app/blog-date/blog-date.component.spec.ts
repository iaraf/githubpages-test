import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDateComponent } from './blog-date.component';

describe('BlogDateComponent', () => {
  let component: BlogDateComponent;
  let fixture: ComponentFixture<BlogDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
