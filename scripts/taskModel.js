export default class Task{

    constructor(id, descricao, situacao){
        this.id = id;
        this.descricao = descricao;
        this.situacao = situacao;
    }

    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setDescricao(descricao){
        this.descricao = descricao;
    }

    getDescricao(){
        return this.descricao;
    }

    setSituacao(situacao){
        this.situacao = situacao;
    }

    getSituacao(){
        return this.situacao;
    }
}