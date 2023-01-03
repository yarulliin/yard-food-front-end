import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiAvatarModule } from '@taiga-ui/kit';

@Component({
  selector: 'yf-avatar',
  standalone: true,
  imports: [
    CommonModule,
    TuiAvatarModule,
  ],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() public text: string;
  @Input() public size: "m" | "l" | "xl" | "xxl" | "s" | "xs" | "xxs" = "l";
  @Input() public rounded = true;
  @Input() public autoColor = false;
}
