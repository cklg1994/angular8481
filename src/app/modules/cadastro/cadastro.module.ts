import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [CadastroComponent]
})
export class CadastroModule { }
