import { Injectable, signal, computed } from '@angular/core';


export interface Livro {
  autor: string;
  nome: string;
  reserva: boolean;
  categoria: string;
  
}

@Injectable({
providedIn: 'root'
})

export class livrosService{

    private livroAtual = signal<Livro[]>([]);

    readonly livros = this.livroAtual.asReadonly;

    readonly meusLivros = computed(() => (this.livroAtual().filter(l => l.reserva)))


    //--- função para adicionar o livro 
    adicionarLivro(novoLivro: Livro) {
    this.livroAtual.update(lista => [...lista, novoLivro]);
    };

    //--- Função para trocar a reserva do livro, se true -> false e se false -> true
    alternarReserva(nomeLivro: string) {
    this.livroAtual.update(lista =>
      lista.map(l => l.nome === nomeLivro ? { ...l, reserva: !l.reserva } : l)
    );
  }



}