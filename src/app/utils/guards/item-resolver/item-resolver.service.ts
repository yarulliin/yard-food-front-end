import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<any> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return undefined;
  }
}
