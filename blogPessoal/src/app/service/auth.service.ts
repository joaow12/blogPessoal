import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { User } from '../model/User'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  //metodo "entrar"
  //O que está dentro do () é o parametro do metodo
  //Observable = Com Observables, conseguimos lidar com transferência de dados assíncrona.
  //no caso, ele vai fazer uma verificação para ver se realmente o UserLogin é válido
  entrar(userLogin: UserLogin): Observable<UserLogin>{

    //Retornando o metodo post do back-end, com o url/link que ele esta localizado (Utilizando o mesmo do Postman)
    //Como o userLogin é uma classe de validação, ela é usada nesse momento para validar os dados digitados pelo usuário com os dados do banco
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  //Mesmo modo do "entrar", mas nesse caso é usado o "User", já que está criando um User novo e não é uma validação
  cadastrar(user:User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }

  //Verificar se o usuário efetuou o login ou não
  logado(){
    //Criando a variavel "ok" do tipo "boolean" e ela irá ser criada com o false
    let ok: boolean = false

    //Se o campo token estiver diferente de vazio, significa que tem algo lá, e se tiver o usuário será logado
    if(environment.token != ''){
      ok = true
    }

    return ok

  }
}
