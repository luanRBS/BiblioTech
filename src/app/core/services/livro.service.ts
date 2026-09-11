import { Injectable, signal, computed, inject, effect } from '@angular/core';
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
private readonly CACHE_KEY = 'bibliotech_livros';

  // 1. Função para carregar do cache ou retornar a lista inicial padrão
  private obterLivrosIniciais(): Livro[] {
    const salvos = localStorage.getItem(this.CACHE_KEY);
    if (salvos) {
      try {
        return JSON.parse(salvos);
      } catch (e) {
        console.error('Erro ao ler do localStorage:', e);
      }
    }

    // Lista original caso ainda não exista nada gravado no cache
    return [
      {
        autor: "Aditya Y. Bhargava",
        nome: 'Entendendo algoritmos',
        reserva: false,
        categoria: "Tecnologia & Programação",
        image: "img/algoritmos.jpg",
        devolucao: this.calcularDevolucao(),
      },
      {
        autor: "John Allspaw",
        nome: "Manual de DevOps",
        reserva: false,
        categoria: "Devops & Infraestrutura",
        image: "img/devops.jpg",
        devolucao: this.calcularDevolucao(),
      },
      {
        autor: "Daniel Schmitz",
        nome: " Angular 17 do Zero",
        reserva: false,
        categoria: "Tecnologia & Programação",
        image: "img/angular.jpg",
        devolucao: this.calcularDevolucao(),
      },
      {
        autor: "Aditya Y. Bhargava",
        nome: "TI - Tec. Da Informação",
        reserva: false,
        categoria: "Tecnologia & Programação",
        image: "img/ti.jpg",
        devolucao: this.calcularDevolucao(),
      },
      {
        autor: "Kai-Fu LEE",
        nome: "Inteligência Artificial",
        reserva: false,
        categoria: "Inteligência Artificial",
        image: "img/ia.jpg",
        devolucao: this.calcularDevolucao(),
      }
    ];
  }

  // 2. Inicializa o Signal chamando a verificação de cache
  private livroAtual = signal<Livro[]>(this.obterLivrosIniciais());

  readonly livros = this.livroAtual.asReadonly();
  readonly meusLivros = computed(() => this.livroAtual().filter(l => l.reserva));

  constructor() {
    // 3. Qualquer alteração (adicionar livro ou alternar reserva) salva no cache automaticamente
    effect(() => {
      const lista = this.livroAtual();
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(lista));
    });
  }

  //--- Função para adicionar o livro 
  adicionarLivro(novoLivro: Livro) {
    this.livroAtual.update(lista => [...lista, novoLivro]);
  }

  //--- Função para trocar a reserva do livro
  alternarReserva(nomeLivro: string) {
    this.livroAtual.update(lista =>
      lista.map(l => l.nome === nomeLivro ? { ...l, reserva: !l.reserva } : l)
    );
  }

  //--- Função para calcular a data daqui a 2 semanas
  calcularDevolucao(): string {
    const dataHoje = new Date();
    const duasSemanas = addWeeks(dataHoje, 2); 
    return duasSemanas.toLocaleDateString('pt-br');
  }
}