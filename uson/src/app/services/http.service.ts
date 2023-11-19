import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

interface UserDataInterface {
  name: string;
  lastName: string;
  email: string;
  imagePath: string;
}
interface ChatUsersResponse {
  data: string[];
  success: boolean;
  message: string;
}
interface ApiResponseUser {
  data: UserDataInterface;
  success: boolean;
  message: string;
}
interface ApiResponseCreateRandowmChat {
  data: number;
  success: boolean;
  message: string;
}

interface FriendData {
  name: string;
  lastName: string;
  email: string;
  imagePath: string;
  description: string;
  birthday: string; // Assuming this is a string representation of the date
}

interface ApiResponseFriends {
  data: FriendData[];
  success: boolean;
  message: string;
}
interface ChatMessage {
  id: number;
  chatId: number;
  userId: string;
  content: string;
}

interface ChatMessagesResponse {
  data: ChatMessage[];
  success: boolean;
  message: string;
}
interface PersonData {
  name: string;
  lastName: string;
  email: string;
  imagePath: string;
  description: string;
  birthday: string; // Assuming this is a string representation of the date
}
interface ListPersonData{
  data:PersonData[],
  message:string,
  success:boolean
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {







  loggedUser!:string
  constructor(private http: HttpClient, private userService:UserService) {
    this.loggedUser = this.userService.ActiveUseremail
   }

  getData(){
    const url = 'http://10.20.1.115:5044/api/Friends/GetFriendList'

    const urlParams = new HttpParams()
      .set('email','qqq')

      const options = {params: urlParams}

     return this.http.get(
      url,
       options
      )

  }
  postData(){
    const url = 'http://api.nbp.pl/api/cenyzlota'

   
      const options = 'ookok'

     return this.http.post(
      url,
      options
      )

  }


  getLoggedUser(){
    const url = 'http://10.20.1.115:5044/api/User/GetUser'

    const urlParams = new HttpParams()
      .set('email',this.loggedUser)

      const options = {params: urlParams}

     return this.http.get<ApiResponseUser>(
      url,
       options
      )
  }
  getLoggedUserFriends(){
    const url = 'http://10.20.1.115:5044/api/Friends/GetFriendList'

    const urlParams = new HttpParams()
      .set('email',this.loggedUser)

      const options = {params: urlParams}

     return this.http.get<ApiResponseFriends>(
      url,
       options
      )
  }
  createChat(){
    const url = 'http://10.20.1.115:5044/api/Message/CreateRandomChat?userId='+this.loggedUser

  
      console.log('create chat send')
    return this.http.post<ApiResponseCreateRandowmChat>(url,this.loggedUser)
      
  }

  sendMessage(content: string, chatId:number, userEmail:string){
    const url = 'http://10.20.1.115:5044/api/Message/PutMessage?content='+content+'&chat='+chatId+'&user='+userEmail

    const urlParams = new HttpParams()
      .set('content',content)
      .set('chat',chatId)
      .set('user',userEmail)

      const options = {params: urlParams}
      console.log('send',content,chatId)
     this.http.put(
      url,
       options
      ).subscribe(response=>{
        console.log('response')
      })

  }
  getChatMessages(chatId:number){
    const url = 'http://10.20.1.115:5044/api/Message/GetChatMessages'

    const urlParams = new HttpParams()
      .set('chatId',chatId)

      const options = {params: urlParams}

     return this.http.get<ChatMessagesResponse>(
      url,
       options
      )
  }

  getChatUsers(chatId:number){
    const url = 'http://10.20.1.115:5044/api/Message/GetChatUsers'

    const urlParams = new HttpParams()
      .set('chatId',chatId)

      const options = {params: urlParams}

     return this.http.get<ChatUsersResponse>(
      url,
       options
      )
  }
  getFriendsRequests(email:string){
    const url = 'http://10.20.1.115:5044/api/Friends/GetFriendRequestList'

    const urlParams = new HttpParams()
      .set('email',email)

      const options = {params: urlParams}

     return this.http.get<ListPersonData>(url,
       options
      )
  }
  getFriendsInvitations(email:string){
    const url =  'http://10.20.1.115:5044/api/Friends/GetSendedInvitationsList'

    const urlParams = new HttpParams()
      .set('email',email)

      const options =  {params: urlParams}

     return this.http.get<ListPersonData>(url,
       options
      )
  }

  sendRequest(user:string, reciver:string){
    const url = 'http://10.20.1.115:5044/api/Friends/SendInvitaion?user='+user+'&reciver='+reciver

    const urlParams = new HttpParams()
      .set('user',user)
      .set('reciver',reciver)


      const options = {params: urlParams}
    
     this.http.post(
      url,
       options
      ).subscribe(response=>{
        console.log('response')
      })
  }

  

}
