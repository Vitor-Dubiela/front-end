import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/Ciclo';
import { CicloService } from 'src/app/services/ciclo.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  constructor(private service: CicloService) { }

  id!: string;
  ciclos: Ciclo[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe(/*function(ciclos)*/(ciclos) => {
      this.ciclos = ciclos;    
    });
  }

  deletar(): void {
    let id = this.id;

    this.service.deletarComputador(id).subscribe((ciclos) => {
      console.log(ciclos);
    });    
  }
}
