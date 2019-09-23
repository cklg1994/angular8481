import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private _isNewEmailOpen = false;

  listaEmails = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  
  get isNewEmailOpen () {
    return this._isNewEmailOpen;
  }

  toggleNewEmail() {
    this._isNewEmailOpen = !this.isNewEmailOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    if(formEmail.invalid) return;
    

    this.listaEmails.push({
    destinatario: this.email.destinatario,
    assunto: this.email.assunto,
    conteudo: this.email.conteudo
  })

    
    formEmail.resetForm();


  }

}
