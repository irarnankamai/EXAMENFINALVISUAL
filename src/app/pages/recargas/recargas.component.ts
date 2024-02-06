import { Component, OnInit } from '@angular/core';
import { Recarga } from 'src/app/domain/recarga';
import { RecargasService } from 'src/app/services/recargas.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.css']
})
export class RecargasComponent implements OnInit{
  recargas: any;

  recarga: Recarga = new Recarga();

  constructor(private recargasService: RecargasService){

  }

  ngOnInit():void {
    this.recargas = this.recargasService.getRecargas();
  }

  guardar(){
    this.recargasService.saveRecarga(this.recarga).subscribe(data => {
      console.log(data);
      if(data.id == 1)
        this.ngOnInit();
      else
        alert("Error al insertar " + data.mensaje);
    });
  }

}