import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { NgClass } from '@angular/common';
import { ImgService } from '../../../services/img.service';

@Component({
  selector: 'app-friend-element',
  templateUrl: './friend-element.component.html',
  styleUrl: './friend-element.component.scss'
})
export class FriendElementComponent implements OnInit {
@Input() userInput!:User
fullName!:string
constructor(public img:ImgService){}
ngOnInit(): void {
  
  this.fullName = this.userInput.name + ' ' + this.userInput.lastName
  console.log(this.userInput)
}

}
