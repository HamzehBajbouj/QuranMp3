import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecitersComponent } from './components/reciters/reciters.component';
import { ReciterProfileComponent } from './components/reciter-profile/reciter-profile.component';
import { FooterComponent } from './components/shared/layout/footer/footer.component';
import { HeaderComponent } from './components/shared/layout/header/header.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecitersComponent,
    ReciterProfileComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
