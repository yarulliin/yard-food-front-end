import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl } from "@angular/forms";

import {
  TuiErrorModule,
  TuiHintModule,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';

import { BaseControl } from '../../utils/directives/base-control/base-control.directive';

import { ValidationErrorTips } from '../../utils/interfaces/app.interfaces';

@Component({
  selector: 'yf-input',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TuiInputModule,
    TuiPrimitiveTextfieldModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiFieldErrorPipeModule,
    TuiCurrencyPipeModule,
    TuiHintModule,
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends BaseControl {
  @Input() public label = '';
  @Input() public placeholder = '';
  @Input() public type: string;
  @Input() public error: string;
  @Input() public isRequired: boolean;
  @Input() public allowClear: boolean;
  @Input() public hintContent = '';
  @Input() public currency = '';
  @Input() public set errorMessages(messages: ValidationErrorTips) {
    this._errorTips = { ...messages };
  }

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }
}
