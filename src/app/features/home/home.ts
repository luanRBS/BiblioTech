import { Component, inject, NgModule } from '@angular/core';
import { livrosService, Livro } from '../../core/services/livro.service';
import { ModalService } from '../../core/services/modal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  termoBusca: string = '';
  mostrarResultados: boolean = false;

  livroService = inject(livrosService);
  modalService = inject(ModalService);
  
  livros = this.livroService.livros();

  get livrosFiltrados(): Livro[] {
    if (!this.termoBusca.trim()) {
      return this.livros;
    }
    const termo = this.termoBusca.toLowerCase();
    return this.livros.filter(l => 
      l.nome.toLowerCase().includes(termo) || 
      l.autor.toLowerCase().includes(termo)
    );
  }

  exibirResultados() {
    this.mostrarResultados = true;
    
  }

  esconderResultados() {
    setTimeout(() => {
      this.mostrarResultados = false;
    }, 200);}

    esconderResultadosClick(event: Event){
      this.mostrarResultados = false;
      (event.target as HTMLElement)?.blur();
    }


  selecionarLivro(livro: Livro) {
    this.termoBusca = livro.nome;
    this.mostrarResultados = false;
  }
}