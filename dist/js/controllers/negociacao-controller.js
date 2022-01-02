import { ehDiaUtil } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/Mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export default class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são possiveis!');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista();
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação Adiconada com sucesso !');
    }
}
