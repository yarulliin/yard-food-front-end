import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TuiButtonModule } from '@taiga-ui/core';

import { ROUTES } from '../../utils/enums/app.enums';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'yf-header',
  standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        TuiButtonModule,
        InputComponent,
    ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly routes = ROUTES;
}
