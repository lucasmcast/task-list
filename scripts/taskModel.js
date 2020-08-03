/**
 * Class Model of tasks
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
export default class Task{

    constructor(id, descricao, situacao){
        this.id = id;
        this.descricao = descricao;
        this.situacao = situacao;
    }

    /**
     * Set value id
     * 
     * @param {Integer} id 
     */
    setId(id){
        this.id = id;
    }

    /**
     * Get value id
     */
    getId(){
        return this.id;
    }

    /**
     * Set Value in the descricao
     * 
     * @param {String} descricao 
     */
    setDescricao(descricao){
        this.descricao = descricao;
    }

    /**
     * Get Value descricao
     */
    getDescricao(){
        return this.descricao;
    }

    /**
     * Set Value in the situacao 
     * 
     * @param {String} situacao 
     */
    setSituacao(situacao){
        this.situacao = situacao;
    }

    /**
     * Get Value situacao
     */
    getSituacao(){
        return this.situacao;
    }
}