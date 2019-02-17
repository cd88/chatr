import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.sass']
})
export class ChatItemComponent implements AfterViewInit {
  @Input() messageData: object;
  @Output() itemRendered = new EventEmitter();
  constructor() { }

  ngAfterViewInit() {
    console.log("chat-item fired AfterViewInit");
    this.itemRendered.emit();
  }

}
