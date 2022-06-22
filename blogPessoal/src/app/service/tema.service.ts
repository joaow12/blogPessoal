import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Metodo para mostrar todos os temas, puxando direto do back-end, nesse caso utiliza uma lista, pois é mais de um objeto
  getAllTema():Observable<Tema[]> {
    //Retornando a url e o token para confirmação
    return this.http.get<Tema[]>('http://localhost:8080/temas', this.token)
  }

  //Metodo para dar POST em um Tema, puxando direto do back-end
  postTema(tema: Tema):Observable<Tema> {
    //Retornando o URL do método, o objeto Tema, e o tekon para confirmar
    return this.http.post<Tema>('http://localhost:8080/temas', tema, this.token)
  }
}
