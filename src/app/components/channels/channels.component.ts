import { Component, OnInit, Input } from '@angular/core';
import Channel from '../../services/channel';
import Workspace from '../../services/workspace';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  currentWorkspaceId;
  currentChannel;
  channelList;

  constructor(private channel: Channel, private workspace: Workspace) { 

    this.workspace.currentWorkspaceId.subscribe(id => {
      this.currentWorkspaceId = id
      if (this.currentWorkspaceId) {
        this.currentChannel = this.channel.getAllChannelsByWorkspaceId(this.currentWorkspaceId)
       
      }
    })
  }

  ngOnInit(): void {
  }

}
