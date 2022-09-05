let nome: string;
let sobrenome: string;
let idade: number;

nome = "joao";
sobrenome = "silva";
idade = 16;

console.log(`nome: ${nome}, idade: ${idade},`);

let a = 5;
let b = 7;

function somar(a: number, b: number) {
    return a + b;
}

console.log(somar(a, b));

let a1: number[] = [1, 2, 3]

console.log(a1);

let a2: (number | string)[] = [1, 2 , 3, "TreinaWeb"]

a2.push(3);
a2.push("exemplo");

console.log(a2);

let a3: (4 | "TreinaWeb")[] = [4, "TreinaWeb"]

console.log(a3);

type Animal = {
    nome: string;
    idade?: number;
}

let cachorro: Animal;

cachorro = {
    nome: "totó",
    idade: 10
}

console.log(cachorro);

enum produtoStatus {
    Ativo = 1,
    Inativo = 2,
    Indisponivel = 3
}

function checarProdutoStatus(status: number){
    switch(status) {
        case produtoStatus.Ativo:
            console.log('Produto Disponível');
            break;
        
        case produtoStatus.Inativo:
            console.log('Produto Não Encontrado');
            break;
        
        case produtoStatus.Indisponivel:
            console.log('Produto Aguardando Estoque')
            break;
    }
}

checarProdutoStatus(produtoStatus.Ativo);