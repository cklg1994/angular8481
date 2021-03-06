import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[cmailFormField]',
})
export class FormFieldDirective {
    constructor(referenciaDoElemento: ElementRef) {
        const campo = referenciaDoElemento.nativeElement as HTMLInputElement;
        
        if(!campo.name) {
            console.error('O atributo name precisa ser informado')
        }else{
            campo.id = campo.name;
        }
        campo.placeholder = " ";

        campo.classList.add('mdl-textfield__input');
    }    
}