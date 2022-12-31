import { NgModule, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { httpInterceptorsProviders } from "./utils/providers/httpInterceptors.providers";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
      BrowserAnimationsModule,
      TuiRootModule,
      TuiDialogModule,
      TuiAlertModule
],
  providers: [
    httpInterceptorsProviders,
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
