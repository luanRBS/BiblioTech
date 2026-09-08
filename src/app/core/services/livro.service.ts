import { Injectable, signal, computed } from '@angular/core';


export interface Livro {
  autor: string;
  nome: string;
  reserva: boolean;
  categoria: string;
  image: string;
  
}

@Injectable({
providedIn: 'root'
})

export class livrosService{

    private livroAtual = signal<Livro[]>([ {
      autor: "Aditya Y. Bhargava",
      nome: 'Entendendo algoritmos',
      reserva: false,
      categoria: "TI",
      image: "img/algoritmos.jpg",
    },
    {
      autor: "John Allspaw",
      nome: "Manual de DevOps",
      reserva: false,
      categoria: "TI",
      image: "img/devops.jpg"
    },
    {
      autor: "Daniel Schmitz",
      nome: " Angular 17 do Zero",
      reserva: false,
      categoria: "TI",
      image: "img/angular.jpg"
    },
    {
      autor: "Aditya Y. Bhargava",
      nome: "TI - Tec. Da Informação",
      reserva: false,
      categoria: "TI",
      image: "img/ti.jpg"
    }
    ]);

    readonly livros = this.livroAtual.asReadonly();

    readonly meusLivros = computed(() => this.livroAtual().filter(l => l.reserva));


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