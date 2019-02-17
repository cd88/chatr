import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule,
          MatInputModule,
          MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatBotService } from './chat-bot.service';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [ChatBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
