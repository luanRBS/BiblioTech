import { Component, inject } from '@angular/core';
import { livrosService } from '../../core/services/livro.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {

  livroService = inject(livrosService);
}
