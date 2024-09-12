import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azure-login';

  constructor(private  msalService: MsalService) {

  }

  ngOnInit() {
    this.msalService.instance.handleRedirectPromise().then((res:any)=> {
      if(res!=null && res.account != null) {
        this.msalService.instance.setActiveAccount(res.account);
      }
    })
  }

  isLoggedIn():boolean {
    return this.msalService.instance.getActiveAccount() != null;
  }

  // login() {
  //   this.msalService.loginPopup().subscribe((res: AuthenticationResult)=> {
  //     this.msalService.instance.setActiveAccount(res.account);
  //   });
  // }
  async login() {
    // await this.msalService.instance.initialize();

    // this.msalService.loginPopup().subscribe((res: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(res.account);
    // }, (error) => {
    //   console.log('Login error:', error);
    // });
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logout();
  }
}
