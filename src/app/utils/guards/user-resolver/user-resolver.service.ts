import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { ProfileFacadeService } from '../../../core/profile/services/profile-facade.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

import { User } from '../../../core/auth/utils/interfaces/login.interfaces';

import { STORAGE_KEYS } from '../../enums/app.enums';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<void> {

  constructor(
    private profileFacadeService: ProfileFacadeService,
    private localStorageService: LocalStorageService,
  ) { }

  public resolve(): void {
    const id = this.localStorageService.getItem<User>(STORAGE_KEYS.USER)?.id;

    this.profileFacadeService.getUserInfo(id);
  }
}
