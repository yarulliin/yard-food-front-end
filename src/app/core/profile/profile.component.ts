import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { ProfileFacadeService } from './services/profile-facade.service';

@Component({
  selector: 'yf-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  public info$: Observable<any> = this.profileFacadeService.info$;
  public orders$: Observable<any> = this.profileFacadeService.orders$;

  constructor(private profileFacadeService: ProfileFacadeService) {}
}
