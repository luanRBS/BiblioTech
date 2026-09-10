import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css'
})
export class CategoriasComponent {
  // Array simples com as categorias e seus respectivos livros
  categorias = [
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
}