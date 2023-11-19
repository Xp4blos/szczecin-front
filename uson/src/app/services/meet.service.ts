import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetService {


  public activeChatId!:number

  public activeChatMessages:any[] = []

  constructor() { }
}
