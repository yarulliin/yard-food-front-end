import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, Input, OnDestroy, Output } from '@angular/core';

import { bind } from '../../decorators/bind.decorator';

@Directive({
  selector: '[yfPagination]',
  standalone: true
})
export class PaginationDirective implements AfterViewInit, OnDestroy {
  @Input() public paginationConfig: { page: number, size: number, query: string };

  @Output() public loadData: EventEmitter<{ page: number, size: number, query: string }> = new EventEmitter<{ page: number, size: number, query: string }>();

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
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        this.loadData.emit({ ...this.paginationConfig, page: this.paginationConfig.page + 1 });
      }
    });
  }
}
