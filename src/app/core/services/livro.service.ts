import { Injectable, signal, computed } from '@angular/core';
import { addDays, addWeeks } from 'date-fns';



export interface Livro {
  autor: string;
  nome: string;
  reserva: boolean;
  categoria: string;
  image: string;
  devolucao: string;
  
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
      devolucao: this.calcularDevolucao(),
    },
    {
      autor: "John Allspaw",
      nome: "Manual de DevOps",
      reserva: false,
      categoria: "TI",
      image: "img/devops.jpg",
      devolucao: this.calcularDevolucao(),
    },
    {
      autor: "Daniel Schmitz",
      nome: " Angular 17 do Zero",
      reserva: false,
      categoria: "TI",
      image: "img/angular.jpg",
      devolucao: this.calcularDevolucao(),
    },
    {
      autor: "Aditya Y. Bhargava",
      nome: "TI - Tec. Da Informação",
      reserva: false,
      categoria: "TI",
      image: "img/ti.jpg",
      devolucao: this.calcularDevolucao(),
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

 //----Função para calcular a data daqui a 2 semanas

  calcularDevolucao(){
      const dataHojee = new Date()

       //----calcula do dia da chamada da função para 2 semanas depois
      const duasSemanas = addWeeks(dataHojee, 2); 


    return duasSemanas.toLocaleString('pt-br');
  }



}