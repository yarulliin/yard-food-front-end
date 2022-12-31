import { Injectable } from '@angular/core';

import { BehaviorSubject } from "rxjs";

import { io, Socket } from "socket.io-client";

import { environment } from "../../environments/environment";

const { baseUrl } = environment;

@Injectable()
export class WebSocketService<T> {
  public message$: BehaviorSubject<T | null> = new BehaviorSubject<T | null>(null);

  private socket: Socket;

  public connect(): void {
    this.socket = io(baseUrl);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public sendMessage<T>(event: string, message: T): void {
    this.socket.emit(event, message);
  }

  public getMessage(event: string): void {
    this.socket.on(event, (message: T) => {
      this.receivedMessage(message)
    })
  }

  private receivedMessage(message: T): void {
    this.message$.next(message);
  }
}
