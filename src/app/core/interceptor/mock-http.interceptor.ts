import {HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap, of, delay, mergeMap} from "rxjs";
import { mockResponses } from "../constants/mock-responses";

export function responseMockingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // if (req.url.endsWith('/auth/login') && req.method === 'POST') {
  //   console.log("🚨Request is being mocked");
  //
  //   return of(new HttpResponse({ status: 200, body: mockResponses.loginSuccess })).pipe(delay(500));
  // }

  if (req.url.endsWith('/documents/recent') && req.method === 'GET') {
    console.log("🚨Request is being mocked");

    return of(new HttpResponse({ status: 200, body: mockResponses.recentDocuments })).pipe(delay(500));
  }

  // if (req.url.endsWith('/documents/stats') && req.method === 'GET') {
  //   console.log("🚨Request is being mocked");
  //
  //   return of(new HttpResponse({ status: 200, body: mockResponses.dashboardStats })).pipe(delay(500));
  // }

  // if (req.url.endsWith('/master/categories') && req.method === 'GET') {
  //   console.log("🚨Request is being mocked");
  //
  //   return of(new HttpResponse({ status: 200, body: mockResponses.getCategories })).pipe(delay(500));
  // }

  if (req.url.endsWith('/master/users') && req.method === 'GET') {
    console.log("🚨Request is being mocked");

    return of(new HttpResponse({ status: 200, body: mockResponses.getUsers })).pipe(delay(500));
  }

  // if (req.url.endsWith('/documents/452') && req.method === 'GET') {
  //   console.log("🚨Request is being mocked");
  //
  //   return of(new HttpResponse({ status: 200, body: mockResponses.getDocument })).pipe(delay(500));
  // }

  // If the request does not match, continue with the next handler
  return next(req);
}



