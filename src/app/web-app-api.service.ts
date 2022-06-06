import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WebAppApiService {

  private messagesUrl = 'http://localhost:8080/';

  constructor(
    private http: HttpClient) { }


    getMessages(): Observable<Message[]> {
      return this.http.get<Message[]>(this.messagesUrl)
    }
}
