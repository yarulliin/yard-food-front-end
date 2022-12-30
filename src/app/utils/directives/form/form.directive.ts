import { Directive } from '@angular/core';
import { AbstractControl, FormGroup } from "@angular/forms";

@Directive()
export class FormDirective<T extends { [K in keyof T]: AbstractControl }> {
  public form: FormGroup<T>;

  constructor() { }

  public initForm(config: FormGroup<T>): void {
    this.form = config;
  }
}
