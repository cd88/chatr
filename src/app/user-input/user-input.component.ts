import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.sass']
})
export class UserInputComponent implements OnInit {
  messageDraft: string = "";
  @Output() newMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    if(this.messageDraft.trim() === "") return;
    this.newMessage.emit(this.messageDraft.replace(/\s+/gi, ' '));
    this.messageDraft = "";
  }

}
