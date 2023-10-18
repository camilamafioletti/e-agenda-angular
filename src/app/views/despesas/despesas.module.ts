import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespesasRoutingModule } from './despesas-routing.module';
import { InserirDespesaComponent } from './inserir-despesa/inserir-despesa.component';
import { ListarDespesasComponent } from './listar-despesas/listar-despesas.component';
import { EditarDespesaComponent } from './editar-despesa/editar-despesa.component';
import { ExcluirDespesaComponent } from './excluir-despesa/excluir-despesa.component';
import { CardDespesaComponent } from './card-despesa/card-despesa.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasModule } from '../categorias/categorias.module';
import { DespesasService } from './services/despesas.service';
import 'src/app/extensions/form-group.extension';


@NgModule({
  declarations: [
    InserirDespesaComponent,
    ListarDespesasComponent,
    EditarDespesaComponent,
    ExcluirDespesaComponent,
    CardDespesaComponent
  ],
  imports: [
    CommonModule,
    DespesasRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    CategoriasModule
  ],
  providers: [DespesasService],
})
export class DespesasModule { }
