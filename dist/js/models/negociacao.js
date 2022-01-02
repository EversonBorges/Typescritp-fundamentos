export class Negociacao {
    /*
    Neste caso não precisa de get para acessar a propriedade, mas ela será somente
    leitura e não poderá atribuir valor, somente ao criar.
      constructor(
          public readonly data: Date,
          public readonly quantidade: number,
          public readonly valor: number
      ) {}
*/
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        //Garantir a imutabilidade da data
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criar(dataString, quantidadeString, valorString) {
        //this.inputData.valueAsDate,
        //this.inputQuantidade.valueAsNumber,
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
