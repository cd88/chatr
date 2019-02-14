import { Component, OnInit } from '@angular/core';
import { ChatBotService } from './chat-bot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'chatter';
  chatApiConnected = false;
  messageLog = [];

  constructor(private chatBotService: ChatBotService){}

  ngOnInit() {
    this.chatBotService.getApiStatus()
      .subscribe(response => {
        this.chatApiConnected = response['status'] === 'good';
        console.log(response, this.chatApiConnected)
      }, error => {
        console.log(error)
      });
  }

  sendMessage(msg: string) {
    this.messageLog.push({user: 'you', text: msg});

    this.chatBotService.messageChatBot(msg)
      .subscribe( reply => {
        this.messageLog.push({user: 'bot', text: reply['output']});
      }, error => {
        console.log(error);
      });
  }
}
