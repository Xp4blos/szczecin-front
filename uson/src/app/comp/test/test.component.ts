import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  constructor(private httpService:HttpService){}



  ngOnInit(): void {
    this.httpService.getData().subscribe(response=>{
      console.log(response)
    })
  }

}
