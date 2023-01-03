import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { HeaderComponent } from '../header/header.component';
import { CardComponent } from './components/card/card.component';

import { CatalogFacadeService } from './services/catalog-facade.service';

import { EnterTheViewportDirective } from '../../utils/directives/enter-the-viewport/enter-the-viewport.directive';
import { RouterModule } from '@angular/router';
import { FiltersComponent } from './components/filters/filters.component';

@Component({
  selector: 'yf-catalog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    EnterTheViewportDirective,
    HeaderComponent,
    CardComponent,
    FiltersComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {
  public items$: BehaviorSubject<any[] | null> = this.catalogFacadeService.items$

  constructor(private catalogFacadeService: CatalogFacadeService) {}

  public getItems(item: any): void {
    console.log(item)
    this.catalogFacadeService.getItems();
  }
}
