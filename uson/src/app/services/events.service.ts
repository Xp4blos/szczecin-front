import { Injectable } from '@angular/core';
import { Events } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  events: Events[] = [
    new Events('Szachy','Zapraszamy do gry','6/11/2023','https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_board_opening_staunton.jpg'),
    new Events('Boks','Dla każdego o godinie 18:00','8/11/2023','https://d-art.ppstatic.pl/kadry/k/r/1/e2/96/652d3488d1835_o_large.jpg'),
    new Events('Grupa Wsparcia','Zrzeszamy osoby niepełnosprawne','10/11/2023','https://phavi.umcs.pl/ph/r,1024,800/agicon/c/2022/0927/3966276332946c42f22.jpg'),
   
  ]




}
