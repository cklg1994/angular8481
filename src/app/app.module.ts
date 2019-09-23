import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
import { ModuleRoteamento } from 'src/app.routes';
import { LoginModule } from './modules/login/login.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,    
    CaixaDeEntradaModule,
    ModuleRoteamento,
    LoginModule,
    CadastroModule    
  ],
  providers: [],
  bootstrap: [AppComponent],  
})
export class AppModule { }
