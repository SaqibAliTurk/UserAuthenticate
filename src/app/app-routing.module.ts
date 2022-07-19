import { AuthGuard } from './shared/RouteGaurd/auth.guard';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'', redirectTo:'login', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }