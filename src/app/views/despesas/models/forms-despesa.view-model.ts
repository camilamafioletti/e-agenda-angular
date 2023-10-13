import { FormaPagamentoEnum } from "./forma-pagamento";


export type FormsDespesaViewModel = {
  descricao: string;
  valor: number;
  data: Date;
  formaPagamento: FormaPagamentoEnum;
  categoriasSelecionadas: string[];
};
