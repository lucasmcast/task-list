const view = new TableView();
const model = new TableModel(["ID", "Descricao", "Situacao", "Acao"]);

/**
 * Tests class tableView
 */

function addeveralItems(){
    const inputAdd = document.getElementById("inputAdd");
    for(let i = 0; i < 10; i++){
        inputAdd.value = "ItemAdd "+i;
        view.controler.addItemTable();
    }
    
}
function testAddItemTable(){
    const content = view.controler.getContent();
    const inputAdd = document.getElementById("inputAdd");
    let rowsQtdBefore = content.getElementsByTagName("tr").length;
    //console.log(rowsQtdBefore);
    inputAdd.value = "ItemAdd";
    view.controler.addItemTable();
    let rowsQtdAfter = content.getElementsByTagName("tr").length;
    //console.log(rowsQtdAfter);
    
    let result = rowsQtdBefore + 1;

    if (result === rowsQtdAfter){
        console.log("testAddItemTable() = Sucess");
    }else{
        console.log("testAddItemTable() = Fail")
    }
}

function testRenderTableContent(){  
    const content = document.querySelector("tbody");
    if(content !== null){
        console.log("testRenderTableContent() = Sucess")
    }else{
        console.log("testRenderTableContent() = Fail")
    }
}


/**
 * Tests Class TableModel
 */

function testClickButtonDel(){
    const content = view.controler.getContent();
    let rowsQtdBefore = content.getElementsByTagName("tr").length;
    let row = content.getElementsByTagName("tr");  
    let btnDel = row[0].getElementsByClassName("btn-apagar");
    model.clickButtonDel(btnDel[0]);
    let rowsQtdAfter = content.getElementsByTagName("tr").length;

    let result = rowsQtdBefore - 1;

    if (result === rowsQtdAfter){
        console.log("testClickButtonDel() = Sucess");
    }else{
        console.log("testClickButtonDel() = Fail");
    }
}

function testClickButtonEdit(){
    const content = view.controler.getContent();
    let row = content.getElementsByTagName("tr");
    let btnEdit = row[0].getElementsByClassName("btn-editar");
    model.clickButtonEdit(btnEdit[0]);  
    let btnSave = row[0].getElementsByTagName("button");

    let input = row[0].getElementsByTagName("input");
    let lengthInput = input.length;
    if (lengthInput > 0){
        console.log("testClickButtonEdit() = Sucess")
    }else{
        console.log("testClickButtonEdit() = Fail")
    }
    console.log(row[0])
    let description = row[0].getElementsByTagName("td");
    
    let descriptionAfter = input[0].value = "Teste";
    model.saveDescription(description[1], input[0] )
    
}

function testClickButtonFinish(){

}

addeveralItems()
testAddItemTable() 
testRenderTableContent()
testClickButtonDel()
testClickButtonEdit()
testClickButtonFinish()

