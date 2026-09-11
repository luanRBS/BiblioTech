import { Injectable, signal } from "@angular/core";
import { Livro } from "./livro.service";




@Injectable({ providedIn: 'root' })
export class ModalService {
  // Variável reativa para controlar o modal
  private modalAberto = signal(false);
  private livroSelecionado = signal<Livro | null>(null);
  
  // Signals públicos (readonly)
  readonly isOpen = this.modalAberto.asReadonly();
  readonly livro = this.livroSelecionado.asReadonly();
  
  abrirModalLivro(livro: Livro) {
    this.livroSelecionado.set(livro);
    this.modalAberto.set(true);
  }

  // função criada para poder ser usada no componente do ADMIN
  abriModal(){
    this.modalAberto.set(true);
  }
  
  fecharModal() {
    this.modalAberto.set(false);
    // Opcional: limpar o livro depois de um tempo
    setTimeout(() => this.livroSelecionado.set(null), 300);
  }
}