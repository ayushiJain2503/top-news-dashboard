import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqWithHeaders = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
      }
    });
    return next.handle(reqWithHeaders);
  }
}
