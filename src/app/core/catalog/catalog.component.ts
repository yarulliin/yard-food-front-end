import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubject } from "rxjs";

import { CatalogFacadeService } from "./services/catalog-facade.service";

import { EnterTheViewportDirective } from "../../utils/directives/enter-the-viewport/enter-the-viewport.directive";

@Component({
  selector: 'yf-catalog',
  standalone: true,
  imports: [
    CommonModule,
    EnterTheViewportDirective,
  ],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {
  public items$: BehaviorSubject<any[] | null> = this.catalogFacadeService.items$;

  constructor(private catalogFacadeService: CatalogFacadeService) {}

  public getItems(): void {
    this.catalogFacadeService.getItems();
  }
}
