import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TuiRatingModule } from '@taiga-ui/kit';

@Component({
  selector: 'yf-rating',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TuiRatingModule,
  ],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
  @Input() public rate: number;
  @Input() public readOnly = false;
  @Input() public disabled = false;
}
