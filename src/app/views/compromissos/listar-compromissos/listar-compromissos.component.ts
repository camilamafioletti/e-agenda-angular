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
      this.compromissos = this.route.snapshot.data['compromissos'];
    }
}