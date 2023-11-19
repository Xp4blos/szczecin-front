import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {



constructor(public user: UserService, public http: HttpService){}

activeUser!:User
fullName!:string

isChat!:boolean
chatOpener(e:any){
  this.isChat = !this.isChat
  console.log('isChat')
}
chatClose(e:any){
  console.log('close parent')
  this.isChat=false
}
ngOnInit(): void {
  this.isChat = false
  this.http.getLoggedUser().subscribe(response=>{
   
    this.user.user.name = response.data.name
    this.user.user.lastName = response.data.lastName
    console.log(response.data.name)
    console.log(response.data.lastName)
    console.log(this.user.user)
    this.activeUser = this.user.user
  this.fullName = this.activeUser.name + ' ' + this.activeUser.lastName
  console.log(this.fullName)
  })


  this.http.getLoggedUserFriends().subscribe(response=>{
    console.log('friends', response)
    this.user.user.friends = response.data
    console.log(this.user.user)
  })
 
}




  
}
