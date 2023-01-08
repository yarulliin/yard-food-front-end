import { PaginationDirective } from './pagination.directive';
import { TestBed } from '@angular/core/testing';

describe('EnterTheViewportDirective', () => {
  let directive: PaginationDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationDirective]
    }).compileComponents();
  })

  beforeEach(() => {
    directive = TestBed.inject(PaginationDirective);
  });

  directive = TestBed.inject(PaginationDirective);
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
