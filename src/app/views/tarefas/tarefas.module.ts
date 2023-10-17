import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing.module';
import { InserirTarefaComponent } from './inserir-tarefa/inserir-tarefa.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TarefasService } from './services/tarefas.service';
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';


@NgModule({
  declarations: [
    InserirTarefaComponent,
    ListarTarefasComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbTooltipModule,
  ],
  providers: [TarefasService],
})
export class TarefasModule { }
