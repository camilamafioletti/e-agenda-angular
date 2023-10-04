import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsCompromissoViewModel } from '../models/forms-compromisso.view-model';
import { Router } from '@angular/router';
import { CompromissoService } from '../services/compromisso.service';
import { ContatosService } from '../../contatos/services/contatos.service';
import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';

@Component({
  selector: 'app-inserir-compromisso',
  templateUrl: './inserir-compromisso.component.html',
  styleUrls: ['./inserir-compromisso.component.css']
})
export class InserirCompromissoComponent implements OnInit {
  form!: FormGroup;
  compromissoVM!: FormsCompromissoViewModel;
  contatos: ListarContatoViewModel[] = [];

  constructor(private formBuilder: FormBuilder,
    private compromissoService: CompromissoService,
    private router: Router,
    private contatoService: ContatosService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: new FormControl(''),
      tipoLocal: new FormControl(0),
      link: new FormControl(''),
      local: new FormControl(''),
      data: new FormControl(new Date()),
      horaInicio: new FormControl('08:00'),
      horaTermino: new FormControl('09:00'),
      contatoId: new FormControl(''),
    })

    this.contatoService.selecionarTodos().subscribe(res => {
      this.contatos = res;
    })
  }

  gravar(){
    if(this.form.invalid){
      return;
    }

    this.compromissoVM = this.form.value;

    this.compromissoService.inserir(this.compromissoVM).subscribe((res) => {
      this.router.navigate(['/compromissos/listar'])
      console.log(res);
    })
  }
}