import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiSvgModule } from '@taiga-ui/core';
import { TuiActionModule, TuiIslandModule, TuiMarkerIconModule } from '@taiga-ui/kit';

@Component({
  selector: 'yf-card',
  standalone: true,
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiActionModule,
    TuiMarkerIconModule,
    TuiIslandModule,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() public item: any;
  @Input() public showSkeleton: boolean;
}
