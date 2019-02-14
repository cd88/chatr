import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.sass']
})
export class ChatItemComponent implements OnInit {
  @Input() messageData: object;
  constructor() { }

  ngOnInit() {
  }

}
