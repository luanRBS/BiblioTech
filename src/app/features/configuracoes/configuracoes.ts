import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './configuracoes.html',
  styleUrl: './configuracoes.css'
})
export class ConfiguracoesComponent {
  
  traducoes: any = {
    pt: {
      titulo: 'Configuração',
      modoEscuro: 'Modo Escuro',
      idioma: 'Idioma'
    },
    en: {
      titulo: 'Settings',
      modoEscuro: 'Dark Mode',
      idioma: 'Language'
    },
    es: {
      titulo: 'Configuración',
      modoEscuro: 'Modo Oscuro',
      idioma: 'Idioma'
    }
  };

  idiomaAtual = 'pt';
  textos = this.traducoes[this.idiomaAtual];

  alternarModoEscuro(event: any) {
    if (event.target.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  mudarIdioma(event: any) {
    const idiomaSelecionado = event.target.value;
    this.idiomaAtual = idiomaSelecionado;
    this.textos = this.traducoes[this.idiomaAtual]; 
  }
}