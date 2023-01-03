import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Subject, takeUntil } from 'rxjs';

import { TuiButtonModule } from '@taiga-ui/core';

import { InputComponent } from '../../shared/input/input.component';

import { ROUTES } from '../../utils/enums/app.enums';
import { AvatarComponent } from '../../shared/avatar/avatar.component';

@Component({
  selector: 'yf-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TuiButtonModule,
    InputComponent,
    AvatarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter<string>();

  public search: FormControl<string> = new FormControl<string>('', { nonNullable: true });
  public user = '';

  public subscription$: Subject<void> = new Subject<void>();

  public readonly routes = ROUTES;

  public ngOnInit(): void {
    this.initSearchListener();
  }

  public ngOnDestroy(): void {
    this.subscription$.next();
    this.subscription$.complete();
  }

  private initSearchListener(): void {
    this.search.valueChanges
      .pipe(takeUntil(this.subscription$))
      .subscribe((search: string) => this.emitSearch.emit(search));
  }
}
