
import { NgModule } from '@angular/core';
import { HomeComponent } from "./../home/home.component";
import { RouterModule } from '@angular/router';
import {routes} from './home.routing'
import { ComponentsModule } from './components.module';

import { HeaderComponent } from './../components/header/header.component';
import { WorkspacesComponent } from './../components/workspaces/workspaces.component';
import { ChannelsComponent } from './../components/channels/channels.component';
import { MessagesComponent } from './../components/messages/messages.component';
import { UserDirective } from './../directive/UserDirective';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomeComponent,HeaderComponent,
    WorkspacesComponent,
    ChannelsComponent,
    MessagesComponent,
    UserDirective],
    providers: [],
  imports:[RouterModule.forChild(routes), ComponentsModule, CommonModule]
})
export class HomeModule { }
