import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { TuiSvgModule } from "@taiga-ui/core";
import { TuiMarkerIconModule } from "@taiga-ui/kit";

import { InputComponent } from "../../shared/input/input.component";

import { ConvertFromIsoPipe } from "../../utils/pipes/convert-from-iso/convert-from-iso.pipe";

import { Message } from "./utils/interfaces/chat.interfaces";

import { TIME_FORMAT } from "../../utils/consts/date.consts";

@Component({
  selector: 'yf-chat-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    TuiSvgModule,
    TuiMarkerIconModule,
    ConvertFromIsoPipe,
  ],
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDialogComponent {
  @Input() public messages: Message[];

  @Output() public emitCloseDialog: EventEmitter<void> = new EventEmitter<void>();
  @Output() public emitSendMessage: EventEmitter<string> = new EventEmitter<string>();

  public message: FormControl<string> = new FormControl<string>('', { nonNullable: true });

  public readonly dateFormat = TIME_FORMAT;

  public closeDialog(): void {
    this.emitCloseDialog.emit();
  }

  public sendMessage(): void {
    this.emitSendMessage.emit(this.message.value);
  }
}
