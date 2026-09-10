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
  
  categoriass: Categoria[] = [
    {
      nome: 'Tecnologia & Programação',
      livros: [
        { id: 1, titulo: 'Entendendo Algoritmos', autor: 'Aditya Y. Bhargava', capa: 'img/algoritmos.jpg' },
        { id: 2, titulo: 'Angular 17 do Zero', autor: 'Daniel Schmitz', capa: 'img/angular.jpg' },
        { id: 3, titulo: 'TI - Tec. Da Informação', autor: 'Aditya Y. Bhargava', capa: 'img/ti.jpg' }
      ]
    },
    {
      nome: 'Inteligência Artificial',
      livros: [
        { id: 4, titulo: 'Inteligência Artificial', autor: 'Kai-Fu Lee', capa: 'img/ia.jpg' }
      ]
    },
    {
      nome: 'DevOps & Infraestrutura',
      livros: [
        { id: 5, titulo: 'Manual de DevOps', autor: 'John Allspaw', capa: 'img/devops.jpg' }
      ]
    }
  ];


  categoriaFiltrar(categoriaNome: string){
    let filtrado = this.livroService.livros().filter(livro => livro.categoria === categoriaNome)  
    return filtrado;}
}