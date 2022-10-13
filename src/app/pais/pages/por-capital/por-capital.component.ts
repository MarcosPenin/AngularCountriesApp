import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles:[
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorCapitalComponent  {

  termino: string = ""
  hayError: boolean = false;
  paises: Pais[] = [];
  paisesSugeridos:Pais[]=[];

  constructor(private paisService: PaisService) { }

  buscar(termino:string) {
    this.hayError = false;
    this.termino=termino;
    this.paisService.buscarPorCapital(termino).subscribe({
      next: (resp) => {
        console.log(resp)
        this.paises=resp;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    })

  }

sugerencias(termino:string){
  this.hayError=false;
  this.paisService.buscarPais(termino)
  .subscribe(paises=>this.paisesSugeridos=paises.splice(0,3))
}
}
