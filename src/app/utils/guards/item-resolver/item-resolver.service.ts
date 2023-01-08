import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { CatalogFacadeService } from '../../../core/catalog/services/catalog-facade.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<void> {
  constructor(private catalogFacadeService: CatalogFacadeService) {}

  public resolve(route: ActivatedRouteSnapshot): void {
    this.catalogFacadeService.getItem(route.paramMap.get('id') as string);
  }
}
