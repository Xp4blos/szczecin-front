import { Injectable } from '@angular/core';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';
import { UserService } from './user.service';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '991640273675-ki8rjgsrobn46n22fm62u7kd7lucpouq.apps.googleusercontent.com',
  scope: 'openid profile email'
}


@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  

  constructor(private readonly oAuthService: OAuthService, private user:UserService) {
    console.log('google api')
   oAuthService.configure(oAuthConfig)
   oAuthService.loadDiscoveryDocument().then(()=>{
    oAuthService.tryLoginImplicitFlow().then(() =>{
      if(!oAuthService.hasValidAccessToken()){
        oAuthService.initLoginFlow()
      }
      else{
        oAuthService.loadUserProfile().then(profile =>{
          console.log(JSON.stringify(profile))

        })
      }
    })
   })
   }
}
