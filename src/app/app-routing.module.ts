import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component'
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
  { path: '', component: ResultsPageComponent},
  { path: 'profile', component: UserProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
