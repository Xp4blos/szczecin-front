import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent implements OnInit {
  constructor(public http:HttpService,private user:UserService ){}
  friendsInvitation!:any[]
  friendsRequests!:any[]
  

  ngOnInit(): void {
    this.http.getFriendsInvitations(this.user.ActiveUseremail).subscribe(response=>{
      console.log(response.data);
      this.friendsInvitation = response.data
      
    })
    this.http.getFriendsRequests(this.user.ActiveUseremail).subscribe(response=>{
      console.log(response.data);
      this.friendsRequests = response.data
    })
  }
}
