import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //Trazendo as informações do nome e foto
  nome = environment.nome
  foto = environment.foto
  constructor(
    //A rota sempre tem que ficar dentro do constructor
    private router: Router
  ) { }

  ngOnInit() {
  }

  //Criando o metodo para quando o usuário sair do sistema
  sair(){
    //Após ele clicar no botão sair e iniciar esse metodo o usuário será redirecionado para a pagina 'entrar' novamente
    this.router.navigate(['/entrar'])
    //e logo em seguida todos os atributos que estava com os dados do usuário serão limpos
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }

}
