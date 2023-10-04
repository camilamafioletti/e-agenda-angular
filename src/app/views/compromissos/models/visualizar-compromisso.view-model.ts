import { ListarContatoViewModel } from "../../contatos/models/listar-contato.view-model";

export class ListarCompromissoViewModel {
    id: string;
    Assunto: string;
    Data: Date;
    HoraInicio: string;
    HoraTermino: string;
    Contato: ListarContatoViewModel;
  
    constructor(
      id: string,
      Assunto: string,
      Data: Date,
      HoraInicio: string,
      HoraTermino: string,
      Contato: ListarContatoViewModel
    ) {
      this.id = id;
      this.Assunto = Assunto;
      this.Data = Data;
      this.HoraInicio = HoraInicio;
      this.HoraTermino = HoraTermino;
      this.Contato = Contato;
    }
  }
  