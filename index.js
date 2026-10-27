import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

// Dar nome a essa biblioteca
const minhaBiblioteca = new Biblioteca("GT Bezerra - Tarde");

// Cria objeto livro1 com base na classe Livro
const livro1 = new LivroEspecial('Dom Casmurro', 'Machado de Assis', 1899, 'Literatura')
const livro2 = new Livro('O Elogio da Loucura', 'Erasmo de Rotterdam', 1509)
const livro3 = new Livro('Os Miseráveis', 'Victor Hugo', 1862)
const livro4 = new Livro('A Metamorfose', 'Franz Kafka', 1915)
const livro5 = new LivroEspecial('Biblia', 'Vários Autores (Jesus)', 100, 'Religioso')

// Adiciona o livro1 à Biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);
minhaBiblioteca.adicionarLivro(livro5);

// Movimentação dos livros
console.log(`
    ---------- Movimentação ----------
    `);
livro1.emprestar();
livro2.emprestar();
livro3.devolver();
livro4.emprestar();
console.log(`
    ---------- Movimentação ----------
    `);

// Lista os livros da Biblioteca
minhaBiblioteca.listarLivros();
