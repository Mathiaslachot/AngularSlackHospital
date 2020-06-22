import { Component, OnInit, Input } from '@angular/core';
import ChannelService from 'src/app/services/channel';
import MessageService from 'src/app/services/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  currentChannelId;
  messageList;

  constructor(private channel: ChannelService, private message: MessageService) { 
    this.channel.currentChannelId.subscribe(id => {
      this.currentChannelId = id
      this.messageList = this.message.getAllMessagesByChannelId(id);
    })
  }

  @Input() messages: any;

  ngOnInit(): void {
  }

}
