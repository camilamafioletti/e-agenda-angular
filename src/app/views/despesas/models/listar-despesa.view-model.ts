export class ListarDespesaViewModel {
  constructor(
    public id: string,
    public descricao: string,
    public valor: number,
    public data: Date,
    public formaPagamento: string,
    public categoriasSelecionadas: string[]
  ) {
    this.id = id;
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
    this.formaPagamento = formaPagamento;
    this.categoriasSelecionadas = categoriasSelecionadas;
  }
}
