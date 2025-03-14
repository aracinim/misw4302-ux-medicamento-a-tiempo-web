import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ListaMedicamentoComponent } from './medicamento/lista-medicamento/lista-medicamento.component';
import { NuevoMedicamentoComponent } from './medicamento/nuevo-medicamento/nuevo-medicamento.component';
import { GestionMedicamentoComponent } from './medicamento/gestion-medicamento/gestion-medicamento.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'medicamento', component: ListaMedicamentoComponent},
  {path: 'medicamento/nuevo', component: NuevoMedicamentoComponent},
  {path: 'medicamento/editar', component: GestionMedicamentoComponent },
  {path: '**', redirectTo: '/login'}
];
