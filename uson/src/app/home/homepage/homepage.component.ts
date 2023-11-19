import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Events } from '../../models/event.model';
import { EventsService } from '../../services/events.service';
import { ImgService } from '../../services/img.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

friends?:User[]

recomended!:Events[]

constructor(private userService:UserService, private eventsService:EventsService,public img:ImgService){}



ngOnInit(): void {
  this.friends = this.userService.user.friends
  console.log(this.friends)
  this.recomended = this.eventsService.events

}

}
