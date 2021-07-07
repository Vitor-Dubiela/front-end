import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/Ciclo';
import { CicloService } from 'src/app/services/ciclo.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private service: CicloService) { 
    /*http.post<any>("http://localhost:3000/ciclo/listar", objeto)*/
  }
  
  ciclos: Ciclo[] = [];
  
  ngOnInit(): void {
    this.service.listar().subscribe(/*function(ciclos)*/(ciclos) => {
      this.ciclos = ciclos;    
    });
    
  }

}
