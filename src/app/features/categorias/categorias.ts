import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { livrosService } from '../../core/services/livro.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class CategoriasComponent {

  livroService =  inject(livrosService);
  
 

  categoriaFiltrar(categoriaNome: string){
    let filtrado = this.livroService.livros().filter(livro => livro.categoria === categoriaNome)  
    return filtrado;}
}