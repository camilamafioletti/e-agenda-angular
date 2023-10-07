import { Component, OnInit } from '@angular/core';
import { ListarCompromissosViewModel } from '../models/listar-compromissos.view-model';
import { CompromissoService } from '../services/compromisso.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Component({
  selector: 'app-listar-compromissos',
  templateUrl: './listar-compromissos.component.html',
  styleUrls: ['./listar-compromissos.component.css']
})
export class ListarCompromissosComponent implements OnInit {
  compromissos: ListarCompromissosViewModel[] = [];

  constructor(
    private route: ActivatedRoute, private toastrService: ToastrService
    ){}

    ngOnInit(): void {
      this.route.data.pipe(map((dados) => dados['compromissos'])).subscribe({
        next: (compromissos) => this.processarSucesso(compromissos),
        error: (erro) => this.processarFalha(erro),
      });
    }
  
  processarSucesso(compromissos: ListarCompromissosViewModel[]) {
    this.compromissos = compromissos;
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}