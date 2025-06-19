import {HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req).pipe(tap(event => {

    console.log("🚨Request Intercepted")
    console.log(req)
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
}
