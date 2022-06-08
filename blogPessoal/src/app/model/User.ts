import { Postagem } from "./Postagem"

//O nome do model(classe) não precisa ser igual ao back-end, mas os atributos devem ser (obrigatório) iguais aos do back-end
//Export = falando que vai criar uma classe
//Class = falando que é uma classe
//E apos isso da o nome dele
export class User{
    //number = o long do typescript
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    //Fazendo o relacionamento com a model Postagem
    public postagem: Postagem                     
}