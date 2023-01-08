import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { HeaderComponent } from '../header/header.component';

import { CatalogFacadeService } from '../catalog/services/catalog-facade.service';

@Component({
  selector: 'yf-item',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  public item$: Observable<any> = this.catalogFacadeService.item$;

  constructor(private catalogFacadeService: CatalogFacadeService) {}
}
