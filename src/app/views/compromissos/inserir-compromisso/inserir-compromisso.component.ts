import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsCompromissoViewModel } from '../models/forms-compromisso.view-model';
import { Router } from '@angular/router';
import { CompromissoService } from '../services/compromisso.service';
import { ContatosService } from '../../contatos/services/contatos.service';
import { ListarContatoViewModel } from '../../contatos/models/listar-contato.view-model';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService,
    private contatoService: ContatosService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: new FormControl('', [Validators.required]),
      tipoLocal: new FormControl(0, [Validators.required]),
      link: new FormControl('', [Validators.required]),
      local: new FormControl('', [Validators.required]),
      data: new FormControl(new Date(), [Validators.required]),
      horaInicio: new FormControl('08:00', [Validators.required]),
      horaTermino: new FormControl('09:00', [Validators.required]),
      contatoId: new FormControl(''),
    })

      this.form.get('tipoLocal')?.valueChanges.subscribe((value) => {
        if (value === 0) {
          this.form.get('local')?.disable();
          this.form.get('link')?.enable();
          this.form.get('local')?.setValue(' ');
        } else {
          this.form.get('link')?.disable();
          this.form.get('local')?.enable();
          this.form.get('link')?.setValue(' ');
        }
      });
      
      this.form.get('local')?.disable();
      this.form.get('local')?.setValue(' ');
      

    this.contatoService.selecionarTodos().subscribe(res => {
      this.contatos = res;
    })
  }

  campoEstaInvalido(nome: string) {
    return this.form.get(nome)!.touched && this.form.get(nome)!.invalid;
  }

 
  gravar() {
    if (this.form.invalid) {

    for (let erro of this.form.validate()) {
      this.toastrService.warning(erro);
    }

       return;
    }

    this.compromissoVM = this.form.value;

    this.compromissoService.inserir(this.compromissoVM).subscribe({
      next: (compromisso: FormsCompromissoViewModel) => this.processarSucesso(compromisso),
      error: (err: Error) => this.processarFalha(err),
    });
  }

  processarSucesso(compromisso: FormsCompromissoViewModel) {
    this.toastrService.success(
      `O contato "${compromisso.assunto}" foi cadastrado com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/compromissos/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}
