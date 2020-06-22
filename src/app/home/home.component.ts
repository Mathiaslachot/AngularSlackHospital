import { Component, OnInit } from '@angular/core';
import Workspace from '../services/workspace';
import Channel from '../services/channel';
import Message from '../services/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentWorkspace;
  currentChannelId;
  workspaceList;
  channelList;
  messageList;
  

  constructor(private workspace: Workspace, private channel: Channel, private message: Message) { 
  console.log("HomeComponent -> constructor -> workspace", workspace)
    this.workspace.currentWorkspaceId.subscribe(id => {
      this.currentWorkspace = id
      this.channelList = this.channel.getAllChannelsByWorkspaceId(id);
      this.channel.currentChannelId.next(this.channelList[0].id)
    })

    this.workspaceList = this.workspace.getAllWorkspaces();
    console.log("HomeComponent -> constructor -> workspaceList", this.workspaceList)

    this.channel.currentChannelId.subscribe(id => {
      this.currentChannelId = id
      this.messageList = this.message.getAllMessagesByChannelId(id);
    })
  }

  ngOnInit(): void {
  }

}
