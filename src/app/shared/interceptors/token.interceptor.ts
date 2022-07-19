import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GaurdService } from '../gaurd.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let authService = this.injector.get(GaurdService);
    if (!authService.getToken()) {
      return next.handle(request);
    }
    let tokenData = request.clone({
      setHeaders: {
        "auth-token": `${authService.getToken()}`,
      }
    });

    return next.handle(tokenData);
  }
}
