import Livro from "./Livro.js";

class LivroEspecial extends Livro {
    constructor(titulo, autor, ano, categoria){
        super(titulo, autor, ano);
        this.categoria = categoria;
    }

    // Polimorfismo que vai sobrescrever o método exibirInfo()  da classe Livros
    exibirInfo() {
        return `${super.exibirInfo()} [${this.categoria.toUpperCase()}]`;
    }
}

export default LivroEspecial;

