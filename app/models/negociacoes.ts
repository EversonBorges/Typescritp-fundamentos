import { Negociacao } from "./negociacao.js";

//Array<Negociacao> === Negociacao[]
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray<Negociacao> === readonly Negociacao[]
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

}