import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { TuiHintModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiMarkerIconModule } from '@taiga-ui/kit';

import { ChatDialogComponent } from '../chat-dialog/chat-dialog.component';

import { AppFacadeService } from '../../services/app-facade/app-facade.service';
import { WebSocketService } from '../../services/web-socket/web-socket.service';

import { Message } from '../chat-dialog/utils/interfaces/chat.interfaces';

@Component({
  selector: 'yf-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TuiLoaderModule,
    TuiHintModule,
    TuiMarkerIconModule,
    ChatDialogComponent,
  ],
  providers: [WebSocketService],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public isLoaderActive$: BehaviorSubject<boolean> = this.appFacadeService.isLoaderActive$;
  public messages$: BehaviorSubject<Message[] | null> = this.webSocketService.message$;
  public isHintShown$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private appFacadeService: AppFacadeService,
    private webSocketService: WebSocketService<Message[]>,
  ) {}

  public ngOnInit(): void {
    this.connectToWebSocket();
    this.webSocketService.getMessage('message');
  }

  public toggleHint(): void {
    this.isHintShown$.next(!this.isHintShown$.value);
  }

  public sendMessage(message: string): void {
    const id = ['123', '321'][Math.floor(Math.random() * 2)]
    this.webSocketService.sendMessage('event', [...this.messages$.value || [], { id, text: message, date: new Date().toISOString() }]);
  }

  private connectToWebSocket(): void {
    this.webSocketService.connect();
  }
}
