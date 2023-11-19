import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { MeetService } from '../../services/meet.service';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrl: './meet.component.scss'
})
export class MeetComponent implements OnInit{

  constructor(private http: HttpService, public meet:MeetService, public user :UserService){}

  onSend(form:NgForm){

    this.http.getChatMessages(this.meet.activeChatId).subscribe(response=>{
      this.meet.activeChatMessages = response.data
      console.log('chat messages',this.meet.activeChatMessages)

      form.reset()
    })

console.log(form.form.value.messageField)
this.http.sendMessage(form.form.value.messageField,this.meet.activeChatId,this.user.ActiveUseremail)
  }

  addFriend(e:any){
      console.log('dodawanie clicked')
      this.http.getChatUsers(this.meet.activeChatId).subscribe(response=>{
        response.data = response.data
        console.log(response.data);
        
        const index = response.data.indexOf(this.user.ActiveUseremail)
        if(index!=-1){
          response.data.splice(index,1)
        }
        console.log(response.data);
        this.http.sendRequest(this.user.ActiveUseremail,response.data[0])
        console.log('invitation send');
        
        

      })
  }



  ngOnInit(): void {
    this.http.createChat().subscribe(response=>{
      console.log(response)
      this.meet.activeChatId = response.data
      console.log(this.meet.activeChatId)

     setInterval(()=>{
      this.http.getChatMessages(this.meet.activeChatId).subscribe(response=>{
        this.meet.activeChatMessages = response.data
        console.log('chat messages',this.meet.activeChatMessages)
      })
     },500) 



    })

   
  }
}
