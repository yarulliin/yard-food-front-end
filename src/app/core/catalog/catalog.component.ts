import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { HeaderComponent } from '../header/header.component';
import { CardComponent } from './components/card/card.component';
import { FiltersComponent } from './components/filters/filters.component';

import { CatalogFacadeService } from './services/catalog-facade.service';

import { PaginationDirective } from '../../utils/directives/pagination/pagination.directive';

@Component({
  selector: 'yf-catalog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PaginationDirective,
    HeaderComponent,
    CardComponent,
    FiltersComponent,
  ],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {
  public items$: Observable<any[] | null> = this.catalogFacadeService.items$

  constructor(private catalogFacadeService: CatalogFacadeService) {}

  public getItems(item: any): void {
    this.catalogFacadeService.getItems();
  }
}
