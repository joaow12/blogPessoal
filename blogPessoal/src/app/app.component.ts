import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogPessoal';
  
  constructor(
  //Criando um objeto do tipo "auth" que vai puxar os metodos do "auth.service.ts"
  //Fazendo uma injeção de dependencia
  //E deve ser colocado como public pois outras classes precisam utilizar (no caso a app.component.html)
    public auth: AuthService
  ){}
}
