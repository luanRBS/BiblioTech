import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-desafios',
  imports: [CommonModule, RouterLink],
  templateUrl: './desafios.html',
  styleUrl: './desafios.css',
})
export class DesafiosComponent {}
