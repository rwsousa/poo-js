class Livro {

    // Encapsular
    #status
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.#status = 'Disponivel'
    }

    emprestar() {
        if(this.#status === 'Disponivel') {
            this.#status = 'Emprestado';
            console.log(`${this.titulo} emprestado com sucesso!`)
        } else {
            console.log(`${this.livro} está indisponivel no momento!`);
        }
    }

    devolver() {
        this.#status = 'Disponivel';
        console.log(`${this.titulo} foi devolvido com sucesso!`)
    }

    exibirInfo() {
        return `${this.titulo} - ${this.autor} - ${this.ano} - ${this.#status}`
    }
}

export default Livro;