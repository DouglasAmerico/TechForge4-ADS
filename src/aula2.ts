import { Cliente } from "./model/Cliente.js";

const cliente = new Cliente(1,"Douglas","Rua A, 123");   

console.log(cliente.apresentar());
console.log(cliente);