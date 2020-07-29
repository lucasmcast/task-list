/**
 * Class Model Table
 * 
 * Manipulate an html table
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
class TableController{

    /**
     * Render table in the html table
     * 
     * @param {Array} itemsTable 
     */
    renderTable(itemsTable){
        this.table = new TableModel(itemsTable);
        this.table.renderTable()
    }
    
    /**
     * Return content tbody of class TableModel
     * 
     * @return {}
     */
    getContent(){
        let content = this.table.getContent();
        return content;
    }

    /**
     * Create EventListener of Button Apagar
     * 
     * @param {DOMElement} btn 
     */
    addEventListenerButtonDel(btn){
        btn.addEventListener('click', () => {
            this.table.clickButtonDel(btn);
        }, false);
    }

    /**
     * Create EventListener of Button Editar
     * 
     * @param {DOMElement} btn 
     */
    addEventListenerButtonEdit(btn){
        btn.addEventListener('click', () => {
            this.table.clickButtonEdit(btn);
        }, false);
    }

    /**
     * Create EventListener of Button Concluir
     * 
     * @param {DOMElement} btn 
     */
    addEventListenerButtonFinish(btn, btnEdit){
        btn.addEventListener('click', () => {
            this.table.clickButtonFinish(btn, btnEdit);
        }, false);
    }

    /**
     * Add Element in the table
     */
    addItemTable(){
        const input = document.getElementById("inputAdd");
        if (input.value == ""){
            alert("Tarefa não foi preenchida!!")
        }else{
            let btnDel = this.table.createButton("Apagar");
            let btnEdit = this.table.createButton("Editar");
            let btnFinish = this.table.createButton("Concluir");

            this.addEventListenerButtonDel(btnDel);
            this.addEventListenerButtonFinish(btnFinish, btnEdit);
            this.addEventListenerButtonEdit(btnEdit);
            
            let buttons = [btnDel, btnFinish, btnEdit]
            this.table.createStructureTable(input, buttons);
        }
    }

}