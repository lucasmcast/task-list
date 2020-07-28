class TableView{

    constructor(){
        /* Construtor ira inicializar a classe controler e renderizar tabela*/
        this.controler = new TableController();
        this.renderTable();
        this.buttonAdd = document.getElementById("buttonAdd");
        this.buttonAdd.addEventListener('click', this.addItem);
    }

    addItem = () => {
        /* Adiciona item na tabela de tarefas 
         */
        this.controler.addItemTable();
    }

    renderTable = () => {
        /* Renderiza a tabela de tarefas
         *@param itemsTable Array que contem as informações de colunas
         */
        const itemsTable = ["ID", "Descrição", "Situação", "Ação"];
        this.controler.renderTable(itemsTable);
    }
}