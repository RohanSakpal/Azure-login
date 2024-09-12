import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.scss']
})
export class PrivatePageComponent {
  userName:string = '';
  userEmail:string = '';
  constructor(private msalService:MsalService) { }

  ngOnInit() {
    this.userName = this.msalService.instance.getActiveAccount()?.name || '';
    this.userEmail = this.msalService.instance.getActiveAccount()?.username || '';
    ;
  }
}
