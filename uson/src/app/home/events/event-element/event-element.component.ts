import { Component, Input} from '@angular/core';
import { Events } from '../../../models/event.model';

@Component({
  selector: 'app-event-element',
  templateUrl: './event-element.component.html',
  styleUrl: './event-element.component.scss'
})
export class EventElementComponent {
@Input() eventInput!:Events



}
