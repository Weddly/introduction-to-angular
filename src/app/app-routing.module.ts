import { HousingDetailsComponent } from './components/housing-details/housing-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HousingListComponent } from './components/housing-list/housing-list.component';

const routes: Routes = [
  { path: 'details/:data', component: HousingDetailsComponent },
  { path: '**', component: HousingListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
