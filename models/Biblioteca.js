// Abastração

class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);

    }

    listarLivros() {
        console.log(`Livros da Biblioteca ${this.nome}`);
        this.livros.forEach((livro, i) => {
            console.log(`${i + 1}. ${livro.exibirInfo()}`)
        })
    }

}

export default Biblioteca;