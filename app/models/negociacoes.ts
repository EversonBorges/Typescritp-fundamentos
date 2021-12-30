import { Negociacao } from "./negociacao.js";

//Array<Negociacao> === Negociacao[]
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray<Negociacao> === readonly Negociacao[]
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

}