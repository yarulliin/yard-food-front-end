import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { TuiButtonModule } from "@taiga-ui/core";

import { InputComponent } from "../../../../shared/input/input.component";
import { FormDirective } from "../../../../utils/directives/form/form.directive";

import { LoginForm } from "./utils/interfaces/login-form.interfaces";

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
  constructor(private fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.initForm(this.fb.group({
      login: this.fb.control('', { nonNullable: true, validators: Validators.required }),
      password: this.fb.control('', { nonNullable: true, validators: Validators.required }),
    }));
  }
}
