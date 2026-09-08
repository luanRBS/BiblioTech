import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meus-livros',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './meus-livros.html',
  styleUrl: './meus-livros.css'
})
export class MeusLivrosComponent {

  modalAberto = false;
  
  livroAtual: any = null;

  abrirModal(titulo: string, autor: string, img: string, devolucao: string, status: string) {
    this.livroAtual = { titulo, autor, img, devolucao, status };
    this.modalAberto = true; 
  }

  fecharModal() {
    this.modalAberto = false; 
  }
}