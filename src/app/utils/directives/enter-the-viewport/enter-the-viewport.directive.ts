import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, OnDestroy, Output } from '@angular/core';

import { bind } from '../../decorators/bind.decorator';

@Directive({
  selector: '[yfEnterTheViewport]',
  standalone: true
})
export class EnterTheViewportDirective implements AfterViewInit, OnDestroy {
  @Output() public visibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observer: IntersectionObserver;

  constructor(
    @Host() private readonly elementRef: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(this.callback, options);
    this.observer.observe(this.elementRef.nativeElement);
  }

  public ngOnDestroy(): void {
    this.observer.disconnect();
  }

  @bind
  private callback(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry: IntersectionObserverEntry) => this.visibilityChange.emit(entry.isIntersecting));
  }
}
