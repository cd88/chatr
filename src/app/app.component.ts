import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatBotService } from './chat-bot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer: ElementRef;
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

  snapToBottom() {
    let chatContainer = this.chatContainer.nativeElement;
    console.log('snapToBottom was called: \n scrollTop + clientHeight: ', chatContainer.scrollTop + chatContainer.clientHeight, ' scrollHeight - 36: ', chatContainer.scrollHeight - 36)
      // if scrolling is possible (initial chat-items cascade from top of blank box)
    if (chatContainer.scrollTop + chatContainer.clientHeight >= chatContainer.scrollHeight - 118) {
      chatContainer.scrollTo({left: 0 , top: 10000000, behavior: 'smooth'});
    }
  }
}
