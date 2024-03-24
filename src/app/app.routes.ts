import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent} from './Listes/banks/banks.component';
import { UsersComponent } from './Listes/users/users.component';
import { AgenceComponent } from './Listes/agence/agence.component';
import { AddAgcComponent } from './forms/add-agc/add-agc.component';
import { EditAgcComponent } from './Listes/edit-agc/edit-agc.component';
import { AddBankComponent } from './forms/add-bank/add-bank.component';
import { EditBqComponent } from './forms/edit-bq/edit-bq.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'banklist', component: BanksComponent },
  { path: 'userslist', component: UsersComponent },
  { path: 'agclist', component: AgenceComponent },
  { path: 'addagc', component: AddAgcComponent },
  { path: 'editagc/:agence', component: EditAgcComponent },
  { path: 'addbq', component: AddBankComponent },
  { path: 'editbq/:bank', component: EditBqComponent },
];

