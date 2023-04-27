import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './layout/landing/landing.component';
import { RegisterComponent } from './forms/register/register.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'landing', pathMatch: 'full' },
  //Home page 
  { path: 'landing', component: LandingComponent },

  //Forms
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
