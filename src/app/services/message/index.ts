import { Injectable } from '@angular/core';
import Message from './../../models/message'

@Injectable({
  providedIn: 'root'
})
export default class MessageService {

  messages: Message[] = [
    {
      id: 1,
      userId: 1,
      channelId: 1,
      notifiesUserId: 1,
      content: "Salut tous le monde"
    },
    {
      id: 2,
      userId: 1,
      channelId: 1,
      notifiesUserId: 1,
      content: "Hello"
    },
    {
      id: 3,
      userId: 1,
      channelId: 2,
      notifiesUserId: 1,
      content: "Tchuss"
    }
  ]

  constructor() { }

  getAllMessagesByChannelId(id) {
    return this.messages.filter(message => message.channelId === id)
  }
}
