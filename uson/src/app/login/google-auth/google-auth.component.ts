import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { GoogleApiService } from '../../services/google-api.service';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrl: './google-auth.component.scss'
})
export class GoogleAuthComponent implements OnInit {


constructor(private googleApiService: GoogleApiService){}

ngOnInit(): void {
  
}
}
