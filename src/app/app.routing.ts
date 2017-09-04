import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AssignedComponent } from './components/assigned/assigned.component';
import { MainComponent } from './components/main/main.component';
import { MyassignedComponent } from './components/myassigned/myassigned.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'assigned', component: AssignedComponent },
    { path: 'main', component: MainComponent },
    { path: 'myassigned', component: MyassignedComponent }


//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard',  component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}