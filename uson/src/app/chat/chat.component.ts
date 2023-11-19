import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgClass } from '@angular/common';
import { User } from '../models/user.model';
import { Output, EventEmitter } from '@angular/core';
import { ImgService } from '../services/img.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  @Output() chatOutput = new EventEmitter<boolean>();
  user!: User
  fullName!:string
  



  constructor(private userService:UserService, public img:ImgService){}

  closeChat(){
    this.chatOutput.emit(false)
    console.log('close chat')
  }

 ngOnInit(){
  this.user = this.userService.user
  this.fullName = this.user.name + ' '+ this.user.lastName
 }
}
