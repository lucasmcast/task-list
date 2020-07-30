window.indexedDB =  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

var db = null;

let request  = indexedDB.open("DBtask", 1);


request.onerror = function(e) {
    console.log("Error " + e.target.errorCode);
};

request.onupgradeneeded = function(e){
    db = e.target.result;

    const tasks = db.createObjectStore("tasks", {autoIncrement: "id"});
    tasks.createIndex("descricao", "descricao", { unique: false });
    tasks.createIndex("situacao", "situacao", {unique: false});

};

request.onsuccess = function(e){
    db = e.target.result;
};


/* async function addItems(){
    var transaction = db.transaction(["tasks"], "readwrite");
    // Do something when all the data is added to the database.
    transaction.oncomplete = function(event) {
        console.log("All done!");
    };
  
    transaction.onerror = function(event) {
        // Don't forget to handle errors!
    };
    
    customerData = [{descricao: "teste", situacao: "pendente"}, {descricao: "outra", situacao: "pendente"}]
    var objectStore = transaction.objectStore("tasks");
    customerData.forEach(function(customer) {
        var request = objectStore.add(customer);
        request.onsuccess = function(event) {
        // event.target.result === customer.ssn;
        };
    });
}; */

