import { Component } from '@angular/core';
import { VisualizarCompromissoViewModel } from '../models/visualizar-compromisso.view-model';
import { CompromissoService } from '../services/compromisso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-compromisso',
  templateUrl: './excluir-compromisso.component.html',
  styleUrls: ['./excluir-compromisso.component.css']
})
export class ExcluirCompromissoComponent {
  compromissoVM: VisualizarCompromissoViewModel;
  idSelecionado: string | null = null;

  constructor(
    private compromissosService: CompromissoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.compromissoVM = new VisualizarCompromissoViewModel('',0, '', '', '', new Date(), '','');
  }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.compromissosService
      .selecionarCompromissoCompletoPorId(this.idSelecionado)
      .subscribe((res) => {
        this.compromissoVM = res;
      });
  }

  gravar() {
    this.compromissosService.excluir(this.idSelecionado!).subscribe((res) => {
      this.router.navigate(['/compromissos', 'listar']);
    });
  }
}
