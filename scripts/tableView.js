/**
 * Class view render table html page and actions button
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
class TableView{

    constructor(teste){
        this.controler = new TableController();
        this.renderTable();
        this.addEventListenerButton(); 
    }
    
    /**
     * Add EventListener of button add
     */
    addEventListenerButton(){
        this.buttonAdd = document.getElementById("buttonAdd");
        this.buttonAdd.addEventListener('click', () => {
            this.controler.addItemTable();
        });
    }
   

    /**
     * Render table in the html page
     */
    renderTable(){
        const itemsTable = ["ID", "Descrição", "Situação", "Ação"];
        this.controler.renderTable(itemsTable);
    }
}
