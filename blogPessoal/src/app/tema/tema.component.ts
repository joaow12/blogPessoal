import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  //Criando e instanciando o objeto tema
  tema: Tema = new Tema()

  //Criando uma lista com objetos Temas
  listaTemas: Tema[]

  //Quando você coloca dentro do parâmetro do construtor utilizando um método de acesso (public/private), você tá fazendo uma injeção de dependência. 
  //Seria a mesma coisa que o @Autowired do Spring

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){

    if(environment.token == '')
    {
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

}
