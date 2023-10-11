import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { CategoriasService } from './services/categorias.service';
import { ReactiveFormsModule } from '@angular/forms';
import 'src/app/extensions/form-group.extension';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { CardCategoriaComponent } from './card-categoria/card-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './excluir-categoria/excluir-categoria.component';
import { CategoriasRoutingModule } from './categoria-routing.module';

@NgModule({
  declarations: [InserirCategoriaComponent, ListarCategoriasComponent, CardCategoriaComponent, EditarCategoriaComponent, ExcluirCategoriaComponent],
  imports: [CommonModule, CategoriasRoutingModule, ReactiveFormsModule],
  providers: [CategoriasService],
})
export class CategoriasModule {}
