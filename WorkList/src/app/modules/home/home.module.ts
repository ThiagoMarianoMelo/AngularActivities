import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonDeleteAllComponent } from './componentes/button-delete-all/button-delete-all.component';
import { InputAddItensComponent } from './componentes/input-add-itens/input-add-itens.component';
import { ActiviteListComponent } from './componentes/activite-list/activite-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonDeleteAllComponent,
    InputAddItensComponent,
    ActiviteListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
