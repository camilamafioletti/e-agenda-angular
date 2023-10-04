import { ListarContatoViewModel } from "../../contatos/models/listar-contato.view-model";

export class FormsCompromissoViewModel {
    assunto: string;
    tipoLocal: number;
    linkCompromisso: string;
    local: string;
    data: Date;
    horaInicio: string;
    horaTermino: string;
    nomeContato: string;
  
    constructor(
      assunto: string,
      data: Date,
      tipoLocal: number,
      linkCompromisso: string,
      local: string,
      horaInicio: string,
      horaTermino: string,
      contato: string
    ) {
      this.assunto = assunto;
      this.data = data;
      this.tipoLocal = tipoLocal;
      this.linkCompromisso = linkCompromisso;
      this.local = local;
      this.horaInicio = horaInicio;
      this.horaTermino = horaTermino;
      this.nomeContato = contato;
    }
  }
  