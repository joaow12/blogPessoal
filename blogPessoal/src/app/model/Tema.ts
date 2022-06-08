import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    //Como o relacionamento é OneToMany (um tema pode ter varias postagens) deve ser colocadas os "[]" para fazer um array
    public postagem: Postagem[]
}