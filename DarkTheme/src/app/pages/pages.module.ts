import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedComponentesModule} from '../shared-componentes/shared-componentes.module';
import { SobreComponent } from './sobre/sobre.component'



@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedComponentesModule
  ]
})
export class PagesModule { }
