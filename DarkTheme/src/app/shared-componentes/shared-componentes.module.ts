import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component'
import { RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    SobreComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainHeaderComponent,
    SobreComponent,
    HomeComponent
  ]
})
export class SharedComponentesModule { }
