
import { NgModule } from '@angular/core';
import { LoginComponent } from "./../login/login.component";
import { RouterModule } from '@angular/router';
import {routes} from './login.routing'
import { ComponentsModule } from './components.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  providers: [],
  imports:[RouterModule.forChild(routes), ComponentsModule,FormsModule, ReactiveFormsModule, CommonModule]
})
export class LoginModule { }
