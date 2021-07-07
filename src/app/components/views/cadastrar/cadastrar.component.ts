import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/Ciclo';
import { CicloService } from 'src/app/services/ciclo.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private service: CicloService) {
    
   }

  ciclo: Ciclo = new Ciclo();

  ngOnInit(): void {
  }

  cadastrar(): void {
   console.log(this.ciclo.dono);
    /*alert("Olá, mundo")*/
//  this.ciclo = new Ciclo();
//  this.ciclo.data = new Date();
    this.service.cadastrar(this.ciclo).subscribe((ciclo) => {
     console.log(ciclo);
    });
  }
}
