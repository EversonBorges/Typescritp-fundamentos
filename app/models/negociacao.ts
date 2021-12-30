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

    constructor(
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number
        ) {}

    get data(): Date{
        //Garantir a imutabilidade da data
        const data = new Date(this._data.getTime());
       return data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}