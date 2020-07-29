
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
     * Creates collums of table
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
     * 
     * @param {DOMElement} button 
     */
    clickButtonDel(button) {
        var i = button.parentNode.parentNode.rowIndex;
        this.table.deleteRow(i);
    }

    /**
     * Action of button finish task row
     * 
     * @param {DOMElement}  button
     */
    clickButtonFinish(button, btnEdit){
        let line = button.parentNode.parentNode;
        let status = line.querySelectorAll("td")[2];
        status.style.background = "#C8E6C9"
        status.innerHTML = "Concluído";
        button.style.display = "none";
        btnEdit.style.display = "none";
    }

    /**
     * Subscribe description of table
     * 
     * @param {DOMElement} tarefa 
     * @param {DOMElement} input 
     */
    saveDescription(tarefa, input){
        tarefa.innerHTML = input.value;
    }
    /**
     * Enable edit descripte of table
     * 
     * @param {DOMElement} button 
     */
    clickButtonEdit(button){
        let line = button.parentNode.parentNode;
        let tarefa = line.querySelectorAll("td")[1]
        
        let btnSalve = document.createElement("button")
        btnSalve.innerHTML = "Salvar"
        let input = document.createElement("input")
        input.value = tarefa.innerHTML
        tarefa.innerHTML = ""
        tarefa.appendChild(input);
        tarefa.appendChild(btnSalve);
        
        btnSalve.addEventListener('click', () => {
            this.saveDescription(tarefa, input);
        });
    }

    /**
     * Creates button element
     * 
     * @param {String} buttonName
     * 
     * @returns {DOMElement} 
     */
    createButton(buttonName){
        let btn = document.createElement("button");
        btn.innerHTML = buttonName;
        let stringClass = "btn-"+buttonName.toLowerCase();
        btn.classList.add(stringClass);

        return btn;
    }

    /**
     * Creates a table structure by inserting a row
     * 
     * @param {DOMElement} input 
     * @param {Array DOMElement} buttons 
     */
    createStructureTable(input, buttons){
        const content = this.content;

        let linha = content.insertRow(-1);
        let coll1 = linha.insertCell(0);
        let coll2 = linha.insertCell(1);
        let coll3 = linha.insertCell(2);
        let coll4 = linha.insertCell(3);

        coll2.classList.add("descricao-col");
        coll4.classList.add("btn-action");
        let qtd =  content.getElementsByTagName("tr").length;
        
        coll1.innerHTML = qtd;
        coll2.innerHTML = input.value;
        coll3.innerHTML = "Pendente"
        coll3.style.background = "#FFF9C4"

        for (let i = 0; i < buttons.length; i++){
            coll4.appendChild(buttons[i])
        }

        input.value = ""
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