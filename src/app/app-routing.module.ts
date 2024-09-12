import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageComponent } from './public-page/public-page.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { msalGuard } from './msal.guard';

const routes: Routes = [
  {path:'',redirectTo:'public-page',pathMatch:'full'},
  {path:'public-page',component:PublicPageComponent},
  {path:'private-page',component:PrivatePageComponent, canActivate: [msalGuard]},
  {path: '**', component:PublicPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
