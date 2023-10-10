import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListarCategoriasComponent,
    InserirCategoriaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CategoriasModule { }
