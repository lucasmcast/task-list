import DataBase from './appDB.js'
import Task from './taskModel.js'

export default class TaskDAO{
    constructor(){
        this.db = new DataBase();
    }

    save(task){
        this.db.con((db) => {
            var transaction = db.transaction(["tasks"], "readwrite");
            // Do something when all the data is added to the database.
            transaction.oncomplete = function(event) {
                console.log("Success Save!");
            };

            transaction.onerror = function(event) {
                // Don't forget to handle errors!
            };
            var customerData = [{descricao: task.getDescricao(), situacao: task.getSituacao()}]
            var objectStore = transaction.objectStore("tasks");

            customerData.forEach(function(customer) {
                var request = objectStore.add(customer);
                request.onsuccess = function(event) {
                };
            });
        })       
        
    }


    getAll(callback){
        this.db.con((db) => {
            var objectStore = db.transaction(['tasks']).objectStore('tasks');
            var request = objectStore.getAll();
            request.onsuccess = (event) => {
                callback(request.result);
            }
        });  

    }

    edit(task){

    }

    getAllEmptyCursor(callback){

    }

    delete(task){

    }
}