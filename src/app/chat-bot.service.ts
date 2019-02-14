import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  chatBotApiStatusUrl = null;
  chatBotCommUrl = null;

  chatBotMockApiStatus = {status: 'good'};
  chatBotMockReply = {output: 'hello'}

  constructor(private http: HttpClient) { }

  getApiStatus() {
    return this.chatBotApiStatusUrl
      ? this.http.get(this.chatBotApiStatusUrl)
      : of(this.chatBotMockApiStatus)
  }

  messageChatBot(userMessage: string) {
    if(this.chatBotCommUrl) {
      return this.http.get(this.chatBotCommUrl + userMessage)
    } else {
      return of(this.chatBotMockReply).pipe(delay(Math.floor(Math.random() * 1000)))
    }
  }
}
