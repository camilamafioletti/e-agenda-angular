import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCompromissosComponent } from './listar-compromissos/listar-compromissos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InserirCompromissoComponent } from './inserir-compromisso/inserir-compromisso.component';
import { EditarCompromissoComponent } from './editar-compromisso/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir-compromisso/excluir-compromisso.component';
import { CardCompromissosComponent } from './card-compromissos/card-compromissos.component';
import 'src/app/extensions/form-group.extension';
import { CompromissoService } from './services/compromisso.service';
import { CompromissosRoutingModule } from './compromissos-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContatosModule } from '../contatos/contatos.module';

@NgModule({
  declarations: [
    ListarCompromissosComponent,
    InserirCompromissoComponent,
    EditarCompromissoComponent,
    ExcluirCompromissoComponent,
    CardCompromissosComponent
  ],
  imports: [
    CommonModule,
    CompromissosRoutingModule,
    NgbModule,
    ReactiveFormsModule,

    ContatosModule,
  ],
  providers: [CompromissoService],
})
export class CompromissosModule { }