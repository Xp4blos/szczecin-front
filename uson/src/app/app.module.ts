import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './comp/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { GoogleAuthComponent } from './login/google-auth/google-auth.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { GroupsComponent } from './home/groups/groups.component';
import { EventsComponent } from './home/events/events.component';
import { ProfileComponent } from './home/profile/profile.component';
import { HappeningComponent } from './home/happening/happening.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { EventElementComponent } from './home/events/event-element/event-element.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FriendElementComponent } from './home/homepage/friend-element/friend-element.component';
import { MeetComponent } from './home/meet/meet.component';
import { ChatComponent } from './chat/chat.component';
import { MessageDirective } from './message.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    LoginComponent,
    HeaderComponent,
    GoogleAuthComponent,
    GroupsComponent,
    EventsComponent,
    ProfileComponent,
    HappeningComponent,
    NavigationComponent,
    EventElementComponent,
    HomepageComponent,
    FriendElementComponent,
    MeetComponent,
    ChatComponent,
    MessageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    OAuthModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
