import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent} from './Listes/banks/banks.component';
import { UsersComponent } from './Listes/users/users.component';
import { AgenceComponent } from './Listes/agence/agence.component';
import { AddAgcComponent } from './forms/add-agc/add-agc.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'banklist', component: BanksComponent },
  { path: 'userslist', component: UsersComponent },
  { path: 'agclist', component: AgenceComponent },
  { path: 'addagc', component: AddAgcComponent },
];
