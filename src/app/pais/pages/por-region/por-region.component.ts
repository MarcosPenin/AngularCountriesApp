import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right:5px;
  } `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ["africa", "america", "asia", "europe", "oceania"]
  regionActiva: string = "";
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if (region !== this.regionActiva) {
      this.regionActiva = region;
      this.paises = [];
      this.paisService.buscarPorRegion(region)
        .subscribe(paises => this.paises = paises)
    }
  }



  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
