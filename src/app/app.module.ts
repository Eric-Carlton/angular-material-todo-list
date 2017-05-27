import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdCheckboxModule, MdGridListModule, MdInputModule, MdChipsModule} from '@angular/material';

import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdInputModule,
    MdChipsModule
  ],
  providers: [],
  bootstrap: [TodoListComponent]
})
export class AppModule { }
