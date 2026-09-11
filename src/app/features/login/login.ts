import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  
  senha = document.getElementById("senha");
  matricula = document.getElementById("matricula");  
  
entrar(matricula: string, senha: string) {
  if (senha === 'admin123' && matricula === "adminRodrigo") {
    this.router.navigate(['/ADM']);
  } else {
    this.router.navigate(['/home']);
  }
}
}

