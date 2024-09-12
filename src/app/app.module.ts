import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth:{
      clientId: '',
      redirectUri: 'http://localhost:4200'
    }
  })
}

export function initializeMsal(msalService: MsalService): () => Promise<void> {
  return () => msalService.instance.initialize();
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    PrivatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeMsal,
      deps: [MsalService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
