import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { LoginFormComponent } from './components/login-form/login-form.component';

import { AuthFacadeService } from './services/auth-facade.service';

import { Credentials } from './utils/interfaces/login.interfaces';

@Component({
  selector: 'yf-login',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public user$: BehaviorSubject<any> = this.authFacadeService.user$;

  constructor(private authFacadeService: AuthFacadeService) {}

  public auth(credentials: Credentials): void {
    this.authFacadeService.auth(credentials);
  }
}
