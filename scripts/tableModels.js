import TaskDAO from './taskDAO.js'
/**
 * Class Model Table
 * 
 * Render table in the html page
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
export default class TableModel{
    
    constructor(items){
        this.items = items;
        this.table = document.getElementById("customers");
        this.thead = document.createElement("thead");
        this.tr = document.createElement("tr");
        this.createLineCol(this.items, this.tr);
        this.content = document.createElement("tbody");
        this.taskDao = new TaskDAO();
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
        let id = button.parentNode.parentNode.querySelectorAll("td")[0].innerHTML

        this.taskDao.delete(parseInt(id));        
        this.table.deleteRow(i);
    }

    getById(id, callback){
        this.taskDao.getById(id, callback);
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
     * @param {DOMElement} allData 
     * @param {Array DOMElement} buttons 
     */
    createStructureTable(allTasks, buttons){
        const content = this.content;
        for(let i = 0; i < allTasks.length; i++){
            let linha = content.insertRow(-1);
            let coll1 = linha.insertCell(0);
            let coll2 = linha.insertCell(1);
            let coll3 = linha.insertCell(2);
            let coll4 = linha.insertCell(3);

            coll2.classList.add("descricao-col");
            coll4.classList.add("btn-action");
            let qtd =  content.getElementsByTagName("tr").length;
        
            coll1.innerHTML = allData[i].getId();
            coll2.innerHTML = allData[i].getDescricao();
            coll3.innerHTML = allData[i].getSituacao();
            coll3.style.background = "#FFF9C4";

            for (let i = 0; i < buttons.length; i++){
                coll4.appendChild(buttons[i])
            }
        }
    }


    /**
     * Return content of table
     * 
     * @returns {DOMElement} tbody
     */
    getContent(){
        return this.content;
    }

    fillLineTable(task, buttons){
        let content = this.content;
        let linha = content.insertRow(-1);
        let coll1 = linha.insertCell(0);
        let coll2 = linha.insertCell(1);
        let coll3 = linha.insertCell(2);
        let coll4 = linha.insertCell(3);

        coll2.classList.add("descricao-col");
        coll4.classList.add("btn-action");
        let qtd =  content.getElementsByTagName("tr").length;

        coll1.innerHTML = task.getId();
        coll2.innerHTML = task.getDescricao();
        coll3.innerHTML = task.getSituacao();
        coll3.style.background = "#FFF9C4";

        for (let i = 0; i < buttons.length; i++){
                coll4.appendChild(buttons[i])
        }
    }

    fillTable(allTasks){

        for(let i = 0; i < allTasks.length; i++){
            let btnDel = this.table.createButton("Apagar");
            let btnEdit = this.table.createButton("Editar");
            let btnFinish = this.table.createButton("Concluir");

            this.addEventListenerButtonDel(btnDel);
            this.addEventListenerButtonFinish(btnFinish, btnEdit);
            this.addEventListenerButtonEdit(btnEdit);
            
            let buttons = [btnDel, btnFinish, btnEdit]

            this.fillLineTable(allTasks[i], buttons, content);
        }
    }

}