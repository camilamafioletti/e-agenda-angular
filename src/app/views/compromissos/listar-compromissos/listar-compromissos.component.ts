import { Component, OnInit } from '@angular/core';
import { ListarCompromissosViewModel } from '../models/listar-compromissos.view-model';
import { CompromissoService } from '../services/compromisso.service';

@Component({
  selector: 'app-listar-compromissos',
  templateUrl: './listar-compromissos.component.html',
  styleUrls: ['./listar-compromissos.component.css']
})
export class ListarCompromissosComponent implements OnInit {
  compromissos: ListarCompromissosViewModel[] = [];

  constructor(private compromissoService: CompromissoService){}

  ngOnInit(): void {
    this.compromissoService.selecionarTodos().subscribe(res => {
      this.compromissos = res;
      console.log(this.compromissos);
    })
  }
}