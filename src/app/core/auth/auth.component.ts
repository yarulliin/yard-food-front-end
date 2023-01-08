import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { LoginFormComponent } from './components/login-form/login-form.component';

import { AuthFacadeService } from './services/auth-facade.service';

import { Credentials, User } from './utils/interfaces/login.interfaces';

@Component({
  selector: 'yf-auth',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  public user$: Observable<User | null> = this.authFacadeService.user$;

  constructor(private authFacadeService: AuthFacadeService) {}

  public auth(credentials: Credentials): void {
    this.authFacadeService.auth(credentials);
  }
}
