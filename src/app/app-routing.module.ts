import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListCoursComponent } from './components/list-cours/list-cours.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrudusersComponent } from './components/crudusers/crudusers.component';
import { CrudcoursComponent } from './components/crudcours/crudcours.component';

const routes: Routes = [
  { path: '', component: HomePageComponent,pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'lister', component: ListCoursComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'crudusers', component: CrudusersComponent},
  { path: 'crudcours', component: CrudcoursComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
