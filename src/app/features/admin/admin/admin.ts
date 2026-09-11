import { Component, inject } from '@angular/core';
import { ModalService } from '../../../core/services/modal.service';
import { Livro, livrosService } from '../../../core/services/livro.service';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {
      livroService = inject(livrosService);
      modalService = inject(ModalService);
 
      private fb = inject(FormBuilder);

       livroForm = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(2)]],
        autor: ['', [Validators.required]],
        categoria: ['', [Validators.required]],
        image: ['',  [Validators.required]],
        devolucao: [''],
        reserva: [false, [Validators.required]],
        status: ['Disponível']
      });

    validaReserva(reservado: boolean): string {
      if (reservado) {
        return this.livroService.calcularDevolucao();
      }
      return '';
    }

  // ao ser clicado o botão de enviar
  onSubmit(): void {
    // checa os campos
    if (this.livroForm.invalid) {
      this.livroForm.markAllAsTouched(); // Destaca campos inválidos caso o usuário tente enviar vazio
      return;
    };


    const formValues = this.livroForm.value;

    const dataDevolucao = this.validaReserva(!!formValues.reserva);

    const novoLivro: Livro = {
      nome: formValues.nome!,
      autor: formValues.autor!,
      devolucao: dataDevolucao,
      reserva: formValues.reserva ?? false,
      categoria: formValues.categoria!, // ou a categoria que você definir
      image: formValues.image!,
      
  }

   

  // envia o livro para o serviço
  this.livroService.adicionarLivro(novoLivro);

  // limpa os campos dps de enviar
  this.livroForm.reset({
      status: 'Disponível', reserva: false})};


  




}
