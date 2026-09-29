import type { Endereco } from "./Endereco.js";

export class Cliente {
    
    constructor(public id: number, public nome: string, public endereco: Endereco) {

    }

    apresentar = ():string =>{
        return "Olá meu nome é "+this.nome;
    }
}