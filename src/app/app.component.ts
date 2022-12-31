import { Component, Inject } from '@angular/core';

import { TuiSvgService } from '@taiga-ui/core';

@Component({
  selector: 'yf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {
    // svgService.define({ logo:  });
  }
}
