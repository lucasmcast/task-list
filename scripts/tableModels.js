/**
 * Class Model Table
 * 
 * Render table in the html page
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
class TableModel{
    
    constructor(items){
        this.items = items;
        this.table = document.getElementById("customers");
        this.thead = document.createElement("thead");
        this.tr = document.createElement("tr");
        this.createLineCol(this.items, this.tr);
        this.content = document.createElement("tbody");
    }

    /**
     * Render table in the html page
     */
    renderTable() {
        this.content.id = "content";

        const tfoot = document.createElement("tfoot");
        this.thead.appendChild(this.tr);

        this.table.appendChild(this.thead);
        this.table.appendChild(this.content);
        this.table.appendChild(tfoot);
    }

    /**
     * Create collums of table
     * 
     * @param {Array} items 
     * @param {DOMElement} tr 
     */
    createLineCol(items, tr)    {
        for(let i=0; i < items.length; i++){
            let col = document.createElement("th");
            col.innerHTML = items[i];
            tr.appendChild(col);
        }
    }

    /**
     * Action of button delete row
     * @param {DOMElement} r 
     */
    clickButtonDel(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("customers").deleteRow(i);
    }

    /**
     * Action of button finish task row
     * @param {DOMElement} r 
     */
    clickButtonFinish(r){
        let line = r.parentNode.parentNode;
        let status = line.querySelectorAll("td")[2]
        status.innerHTML = "Concluído";
        r.style.display = "none";
    }

    /**
     * Enable edit descripte of table
     * @param {DOMElement} r 
     */
    clickButtonEdit(r){
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

    /**
     * Return content of table
     * 
     * @returns {DOMElement} tbody
     */
    getContent(){
        return this.content;
    }

}