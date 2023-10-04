import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsCompromissoViewModel } from '../models/forms-compromisso.view-model';
import { ListarCompromissosViewModel } from '../models/listar-compromissos.view-model';
import { ListarCompromissoViewModel } from '../models/visualizar-compromisso.view-model';

@Injectable({
    providedIn: 'root'
  })
  export class CompromissoService{
    private endpoint: string = 
    'https://e-agenda-web-api.onrender.com/api/compromissos';
  
    constructor(private http: HttpClient){}
  
    public inserir(compromisso: FormsCompromissoViewModel): Observable<FormsCompromissoViewModel>{
      return this.http.post<any>(this.endpoint, compromisso, this.obterHeadersAutorizacao());
    }
  
    public editar(id: string, compromisso: FormsCompromissoViewModel){
      return this.http.put<any>(
        this.endpoint + id,
         compromisso, 
         this.obterHeadersAutorizacao()
         ).pipe(map(res => res.dados));
    }
  
    public excluir(id: string): Observable<any>{
      return this.http.delete(this.endpoint + id, this.obterHeadersAutorizacao());
    }
  
    public selecionarTodos(): Observable<ListarCompromissosViewModel[]>{
      return this.http.get<any>(this.endpoint, this.obterHeadersAutorizacao())
        .pipe(map(res => res.dados));
    }
  
    public selecionarPorId(id: string): Observable<FormsCompromissoViewModel>{
      return this.http.get<any>(this.endpoint + id, this.obterHeadersAutorizacao())
      .pipe(map(res => res.dados));
    }
  
    // public selecionarContatoCompletoPorId(id: string): Observable<VisualizarContatoViewModel>{
    //   return this.http.get<any>(this.endpoint + 'visualizacao-completa/' + id, this.obterHeadersAutorizacao())
    //   .pipe(map(res => res.dados));
    // }
  
    private obterHeadersAutorizacao() {
      const token = environment.apiKey;
  
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }),
      };
    }
  }