import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { JammerProfileComponent } from './jammer-profile/jammer-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { JamRequestsComponent } from './jam-requests/jam-requests.component';
import { AcceptedJammersComponent } from './accepted-jammers/accepted-jammers.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    ResultsPageComponent,
    JammerProfileComponent,
    UserProfileComponent,
    JamRequestsComponent,
    AcceptedJammersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //injecting an instance of the http client, components can inject that if they want
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
