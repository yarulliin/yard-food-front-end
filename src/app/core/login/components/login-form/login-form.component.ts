import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { TuiButtonModule } from '@taiga-ui/core';

import { InputComponent } from '../../../../shared/input/input.component';
import { FormDirective } from '../../../../utils/directives/form/form.directive';

import { LoginForm } from './utils/interfaces/login-form.interfaces';
import { Credentials } from '../../utils/interfaces/login.interfaces';

@Component({
  selector: 'yf-login-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    TuiButtonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent
  extends FormDirective<LoginForm>
  implements OnInit {
  @Output() public emitAuth: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  constructor(private fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.initForm(this.fb.group({
      login: this.fb.control('', { nonNullable: true, validators: Validators.required }),
      password: this.fb.control('', { nonNullable: true, validators: Validators.required }),
    }));
  }

  public auth(): void {
    this.emitAuth.emit(this.form?.value as Credentials);
  }
}
