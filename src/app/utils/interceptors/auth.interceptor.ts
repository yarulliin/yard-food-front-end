import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { LocalStorageService } from '../../services/local-storage.service';

import { User } from '../../core/login/utils/interfaces/login.interfaces';

import { STORAGE_KEYS } from '../enums/app.enums';

import { TOKEN_BLACKLIST_ROUTES, tokenTemplate } from '../consts/app.consts';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userInfo = this.localStorageService.getItem<User>(STORAGE_KEYS.USER);

    if (!TOKEN_BLACKLIST_ROUTES.includes(req.url) && userInfo?.token) {
      const headers = {
        setHeaders: {
          Authorization: tokenTemplate(userInfo?.token),
        },
      }

      req = req.clone(headers);
    }

    return next.handle(req);
  }
}
