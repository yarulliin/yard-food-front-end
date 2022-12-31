import { EnterTheViewportDirective } from './enter-the-viewport.directive';
import { TestBed } from '@angular/core/testing';

describe('EnterTheViewportDirective', () => {
  let directive: EnterTheViewportDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterTheViewportDirective]
    }).compileComponents();
  })

  beforeEach(() => {
    directive = TestBed.inject(EnterTheViewportDirective);
  });

  directive = TestBed.inject(EnterTheViewportDirective);
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
