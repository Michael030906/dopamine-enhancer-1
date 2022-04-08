import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MomJokesComponent } from './mom-jokes/mom-jokes.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { WholesomeFactsComponent } from './wholesome-facts/wholesome-facts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    MomJokesComponent,
    DadJokesComponent,
    WholesomeFactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
