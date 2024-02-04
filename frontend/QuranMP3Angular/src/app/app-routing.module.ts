import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RecitersComponent } from './components/reciters/reciters.component';
import { ReciterProfileComponent } from './components/reciter-profile/reciter-profile.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'main', component:LandingPageComponent},
  {path:'reciters', component:RecitersComponent},
  {path:'reciter-profile/:id', component:ReciterProfileComponent},
  {path:'', redirectTo:'/main', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
