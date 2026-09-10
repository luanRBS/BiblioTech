import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { livrosService } from '../../core/services/livro.service';
import { ModalService } from '../../core/services/modal.service';
import { FormsModule } from '@angular/forms';


interface Livro {
  titulo: string;
  autor: string;
  imagem: string;
}


@Component ({
  
  selector: 'app-perfil',
    imports: [CommonModule,RouterLink,FormsModule],

  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class PerfilComponent {
  termoBusca: string = '';
  mostrarResultados: boolean = false;

  livroService = inject(livrosService);
  modalService = inject(ModalService);
  
  livros: Livro[] = [
    { 
      titulo: 'Inteligência Artificial', 
      autor: 'Kai-Fu LEE',  
      imagem: 'img/ia.jpg' 
    },
    { 
      titulo: 'Entendendo Algoritmos', 
      autor: 'Aditya Y. Bhargava', 
      imagem: 'img/algoritmos.jpg' 
    },
    { 
      titulo: 'Manual de DevOps', 
      autor: 'John Allspaw', 
      imagem: 'img/devops.jpg' 
    },
    { 
      titulo: 'Tecnologia da Informação', 
      autor: 'Harvard Business', 
      imagem: 'img/ti.jpg' 
    },
    { 
      titulo: 'Angular Framework', 
      autor: 'Daniel Schmitz', 
      imagem: 'img/angular.jpg' 
    }
  ];

  get livrosFiltrados(): Livro[] {
    if (!this.termoBusca.trim()) {
      return this.livros;
    }
    const termo = this.termoBusca.toLowerCase();
    return this.livros.filter(l => 
      l.titulo.toLowerCase().includes(termo) || 
      l.autor.toLowerCase().includes(termo)
    );
  }

  exibirResultados() {
    this.mostrarResultados = true;
  }

  esconderResultados() {
    setTimeout(() => {
      this.mostrarResultados = false;
    }, 200);
  }

  selecionarLivro(livro: Livro) {
    this.termoBusca = livro.titulo;
    this.mostrarResultados = false;
  }
}