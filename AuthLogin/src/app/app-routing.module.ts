import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./core/componentes/auth/auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./componentes/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
