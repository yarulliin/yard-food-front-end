import { Provider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoaderInterceptor } from "../interceptors/loader.interceptor";

export const httpInterceptorsProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
];
