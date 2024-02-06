import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recarga } from '../domain/recarga';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  constructor(private http: HttpClient) { }
  getRecargas(){
    let url = environment.WS_PATH + "/recargas/obtenerTodas";
    return this.http.get<any>(url);
  }

  buscarRecargas(id?: number){
    let url = environment.WS_PATH + "/recargas?id=" + id;
    return this.http.get<any>(url);
  }

  saveRecarga(recarga: Recarga){
    let url = environment.WS_PATH + "/recargas/procesar";
    return this.http.post<any>(url, recarga);
  }

  
 
}
