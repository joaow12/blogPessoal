import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  //Quando carrega a pagina esse metodo é iniciado
  ngOnInit() {

    //Aqui é criado um if para caso o campo token esteja vazio o usuário será levado novamente para a pagina entrar, pois deu algum problema com o login dele
    if(environment.token == '')
    {
      //rota levando o usuário novamente para a pagina 'entrar'
      this.router.navigate(['/entrar'])
    }
  }

}
