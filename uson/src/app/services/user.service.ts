import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  public ActiveUseremail:string = 'adrian@gmail.com'

  public name:string = ''
  public lastname = ''
  public email = ''
  

  user:User = new User(this.name,
                       this.lastname,
                       'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg',
                       'Witam jestem Piotr', '', '6/02/2002'
  ,[])

  
}
