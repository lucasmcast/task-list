class TableModel{
    
    constructor(items){
        /* Inicia a Tabela criando alguns componentes */
        this.items = items;
        this.table = document.getElementById("customers");
        this.thead = document.createElement("thead");
        this.tr = document.createElement("tr");
        this.createLineCol(this.items, this.tr);
        this.content = document.createElement("tbody");
    }

    renderTable = () => {
        /* Rendiriza a tabela criando adicionando a tag tbody na tabela*/
        this.content.id = "content";

        const tfoot = document.createElement("tfoot");

        this.thead.appendChild(this.tr);

        this.table.appendChild(this.thead);
        this.table.appendChild(this.content);
        this.table.appendChild(tfoot);
    }

    createLineCol = (items, tr) => {
        /*Cria as colunas conforme os items passados por array e 
         * adiciona ao elemento tr
         * @param items Array passado pela class view
         * @param tr Tag tr passado para ser adicionado as linhas no header
         */
        for(let i=0; i < items.length; i++){
            let col = document.createElement("th");
            col.innerHTML = items[i];
            tr.appendChild(col);
        }
    }

    clickButtonDel(r) {
        /*Apaga a linha da tabela ao clicar no botao apagar
        * param r Botão utilizado para obter o index da tabela
        */
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("customers").deleteRow(i);
    }

    clickButtonFinish(r){
        /*Muda a situação da tarefa ao clicar ao clicar no botao concluir
        * param r Botão utilizado para obter o index da tabela
        */
        let line = r.parentNode.parentNode;
        let status = line.querySelectorAll("td")[2]
        status.innerHTML = "Concluído";
        r.style.display = "none";
    }

    clickButtonEdit(r){
        /*Habilita a edição da descrição ao clicar no botao editar
        * param r Botão utilizado para obter o index da tabela
        */
        let line = r.parentNode.parentNode;
        let tarefa = line.querySelectorAll("td")[1]
        
        let btnSalve = document.createElement("button")
        btnSalve.innerHTML = "Salvar"
        let input = document.createElement("input")
        input.value = tarefa.innerHTML
        tarefa.innerHTML = ""
        tarefa.appendChild(input);
        tarefa.appendChild(btnSalve);
        
        
        btnSalve.addEventListener('click', function () {
            tarefa.innerHTML = input.value
        });
    }

    getContent(){
        /*Retorna o conteudo da tabela, o tbody
        *return content O conteu da tag tbody
        */
        return this.content;
    }

}