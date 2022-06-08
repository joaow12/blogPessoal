import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin} from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  //Chamando diretamente o usuário para gerar uma saida apartir dele
  //Usado para fazer as validações dos campos
  user: User = new User
  //Criando a variavel para confirmar a senha
  confirmarSenha:string
  tipoUsuario:string
  userLogin: UserLogin = new UserLogin

  constructor(
    //Injeção de dependecia
    private AuthService:AuthService,
    //Passando a rota para levar o usuário para a pagina de login, já que ele completou o cadastro
    private router: Router
  ) { }

  //Metodo que vai ser chamado quando a pagina carregar
  ngOnInit(): void {

    //Indicar que vai começar no topo da tela (Coordernadas X e Y)
    window.scroll(0,0)

  }

  //Criando um metodo para fazer a confirmação da senha (Dentro dos parenteses é o parametro que vai ser passado)
  confirmSenha(event:any){
    //Vai fazer a validação a partir da variavel que foi criada e vai validar com o evento que vai ser executado no formulário
    this.confirmarSenha = event.target.value
  }

  //Variavel para ser qual tipo do usuário ("Normal" ou "Admin")
  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }

  //Criando o metodo para poder gerar todas as saidas dos campos da pagina "cadastrar.html" 
  cadastrar(){
    //pegando o tipo do usuário, se é normal ou administrador
    this.user.tipo = this.tipoUsuario

    //Verificando se a senha digitada no campo senha é igual a que foi digitada no campo confirmar senha
    if(this.user.senha != this.confirmarSenha)
    {
      //Se for diferente irá mandar um alerta falando que as senhas não estão iguais
      alert("As senhas estão incorretas")
    }
    else{
      //Se as senhas estiverem corretas irá criar um autenticador (auth.service.ts) indicando que as senhas estão corretas e assim confirmando o cadastro
      /*Irá pegar o usuário e depois irá sobrescrever a resposta (usando o "subscribe") pois ele não irá compreender somente a informação do campo, somente 
      no formato JSON
      SUBSCRIBE = Sobrescever as informações dos campos para o formato JSON
      */
      this.AuthService.cadastrar(this.user).subscribe((resp: User) =>{
        this.user = resp
        //Passando para onde o usuário deve ir depois que o cadastro for bem sucedido
        this.router.navigate(['/entrar'])
        alert ("Usuário cadastrado com sucesso")  
      }
      )
    }

  }

}
