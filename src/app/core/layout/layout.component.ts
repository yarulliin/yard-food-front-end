import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BehaviorSubject } from "rxjs";

import { TuiButtonModule, TuiLoaderModule } from "@taiga-ui/core";

import { AppFacadeService } from "../../services/app-facade.service";
import { ROUTES } from "../../utils/enums/app.enums";

@Component({
  selector: 'yf-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, TuiLoaderModule, TuiButtonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public isLoaderActive$: BehaviorSubject<boolean> = this.appFacadeService.isLoaderActive$;

  public readonly routes = ROUTES;

  constructor(private appFacadeService: AppFacadeService) {}
}
