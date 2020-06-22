import { Routes } from '@angular/router';
import { HomeComponent } from "./../home/home.component";
import { HomeGuard } from "./../guard/home.guard";
import { ChannelsComponent } from '../components/channels/channels.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo:"1",
    component: HomeComponent,
    canActivate: [HomeGuard]
  },
  {
    path: ":idWorkspace",
    component: HomeComponent,
    canActivate: [HomeGuard]
  },
 
];

