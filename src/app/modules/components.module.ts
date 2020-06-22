import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './../components/test/test.component';
import { TestTwoComponent } from './../components/testTwo/testTwo.component';
import { WorkspacesComponent } from "./../components/workspaces/workspaces.component";

const list = [
    TestComponent,
   ];

   
@NgModule({
  declarations: [...list, TestTwoComponent],
  exports: list
})
export class ComponentsModule { }
