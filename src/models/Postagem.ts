import Tema from './Tema';

export default interface Postagem{
    id: number;
    titulo: string;
    conteudo: string;
    tema?: Tema| null
}

