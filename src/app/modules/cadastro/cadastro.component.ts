import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { userInputDTO } from 'src/app/models/dto/user-input';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {  

  private validadoresNome = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(20),
    Validators.pattern('[a-zA-Z/u00c0./u00FF]')
  ])
  private validadoresUsername = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
    Validators.pattern('[a-z0-9]+')
  ])
  private validadoresSenha = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15)
  ])
  private validadoresTelefone = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),

  ])  


  public nome = new FormControl('', this.validadoresNome);
  public username = new FormControl('', this.validadoresUsername);
  public senha = new FormControl('', this.validadoresSenha);
  public telefone = new FormControl('', this.validadoresTelefone);
  public avatar = new FormControl('', Validators.required, this.validaImagem.bind(this));
  
  public formCadastro = new FormGroup({
    nome: this.nome,
    username: this.username,
    senha: this.senha,
    telefone: this.telefone,
    avatar: this.avatar,
  })
  mensagem=""
  constructor(private httpRequest: HttpClient
    ,private roteador: Router) { }

  ngOnInit() {
  }

  validaImagem(){
    console.log(this.avatar.value);    
    return this.httpRequest.get(this.avatar.value).pipe();    
    
  }

  handleCadastro() {

    if(this.formCadastro.invalid){
      return;
    }

    const cadastroIngles = {              
      //data transfer objeto -DTO
    }
    const userDTO = new userInputDTO
    (this.formCadastro.value);
    console.log(userDTO)


    this.httpRequest
      .post('http://localhost:3200/users' , userDTO) //metodo tipo observable
      .subscribe(
        (resposta) => {
          console.log(resposta);
          this.mensagem = "cadastro feito com sucesso"
          this.formCadastro.reset();
        }
          ,(erro: HttpErrorResponse) => {
          this.mensagem = erro.error.body[0].message;
        }        
          ,() => {
            setTimeout(() => {
              this.roteador.navigate(['Login']);
            }, 1000)
          } 
    );
  }
  
  function 
  
}
