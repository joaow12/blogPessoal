import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

//Array de objetos de rotas

const routes: Routes = [
  /*Quando coloca um path vazio ele sera redirecionado automaticamente, criando uma rota padrão, pathMatch = A estratégia de correspondência de caminho 'full' corresponde ao URL inteiro. 
  e importante fazer isso ao redirecionar para rotas de caminho vazio.
  */
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  //path = a referencia, o caminho para a rota entrar, "entrarComponent" o que vai ser chamado quando quiser utilizar essa rota
  {path: 'entrar',component:EntrarComponent},
  //Usando os mesmos criterios do "entrar", só mudando para o cadastro
  {path: 'cadastrar', component:CadastrarComponent},
  //Passando a rota para o inicio (pagina inicial), usado no botão entrar em (entrar.component.html)
  {path: 'inicio', component:InicioComponent},
  {path : 'tema', component:TemaComponent},
  {path: 'tema-edit/:id', component:TemaEditComponent},
  {path: 'tema-delete/:id', component:TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
