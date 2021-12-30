//Array<Negociacao> === Negociacao[]
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray<Negociacao> === readonly Negociacao[]
    lista() {
        return this.negociacoes;
    }
}
