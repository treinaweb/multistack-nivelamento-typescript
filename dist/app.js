/* let nome: string;
let sobrenome: string;
let idade: number;

nome = "joao";
sobrenome = "silva";
idade = 16;

console.log(`nome: ${nome}, idade: ${idade},`); */
/* enum produtoStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarProdutoStatus(status: number){
    switch(status){
        case produtoStatus.Ativo:
            console.log('Produto disponível');
            break;
        case produtoStatus.Inativo:
            console.log('Produto Não Encontrado');
            break;
        case produtoStatus.Indisponivel:
            console.log('Produto Aguardando Estoque');
            break;
    }
}

checarProdutoStatus(produtoStatus.Ativo); */
/* interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    nascer(): void;
    crescer(): void;
    morrer(): void;
}

class Animal implements IAnimal {
    readonly nome: string;
    idade: number;
    private _estaVivo: boolean;

    get estaVivo(): boolean{
        return this._estaVivo;
    }

    constructor(nome: string){
        this.nome = nome;
        this.idade = 0;
        this._estaVivo = false;
    }

    nascer(){
        this._estaVivo = true;
        return console.log(`o ${this.nome} nasceu!`);
    };

    crescer(){
        this.idade++;
        return console.log(`O ${this.nome} cresceu! Ele está com ${this.idade} anos!`);
    };

    morrer(){
        this._estaVivo = false;
        this.idade = 0;
        return console.log(`O ${this.nome} morreu`);
    };
}

namespace Terrestres{
    export class Cachorro extends Animal{
        correr(){
            console.log(`O ${this.nome} correu!`)
        }
    }

    export let cachorro = new Cachorro('Rex');
}

namespace Marinhos{
    export class Golfinho extends Animal{
        nadar(){
            console.log(`O ${this.nome} nadou!`)
        }
    }
    export let golfinho = new Golfinho('Wily');
}

Terrestres.cachorro.correr();
Marinhos.golfinho.nadar(); */
import calc from './calc.js';
console.log(calc.soma(10, 20));
console.log(calc.sub(10, 5));
