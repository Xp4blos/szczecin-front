import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(){
    const url = 'http://api.nbp.pl/api/cenyzlota'

    const urlParams = new HttpParams()
      .set('','')

      const options = {params: urlParams}

     return this.http.get(
      url,
      // options
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



}
