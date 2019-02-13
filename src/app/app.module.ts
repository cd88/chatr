import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ChatItemComponent } from './chat-item/chat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
