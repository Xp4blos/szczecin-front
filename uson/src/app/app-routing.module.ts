import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './comp/test/test.component';
import { GoogleAuthComponent } from './login/google-auth/google-auth.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './home/events/events.component';
import { GroupsComponent } from './home/groups/groups.component';
import { HappeningComponent } from './home/happening/happening.component';
import { ProfileComponent } from './home/profile/profile.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { MeetComponent } from './home/meet/meet.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'google', component: GoogleAuthComponent},
  {path: 'test', component: TestComponent},
  {path: 'main', component: HomeComponent, children:[
    {path: 'events', component: EventsComponent },
    {path: 'groups', component: GroupsComponent },
    {path: 'profile', component: ProfileComponent },
    {path: 'happenings', component: HappeningComponent },
    {path: 'homepage', component: HomepageComponent },
    {path: 'meet', component: MeetComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
