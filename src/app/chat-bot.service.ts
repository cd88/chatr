import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  chatBotApiStatusUrl = null;
  chatBotCommUrl = null;

  chatBotMockApiStatus = {status: 'good'};
  chatBotMockResponse = {output: 'hello'}

  constructor(private http: HttpClient) { }

  getApiStatus() {
    return this.chatBotApiStatusUrl
      ? this.http.get(this.chatBotApiStatusUrl)
      : of(this.chatBotMockApiStatus)
  }

}
