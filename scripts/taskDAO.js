import DataBase from './appDB.js'
import Task from './taskModel.js'

/**
 * Class responsible for making persistence in the database
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * 
 */
export default class TaskDAO{
    constructor(){
        this.db = new DataBase();
    }

    /**
     * Save in the database
     * 
     * @param {Task Model} task 
     * @param {Function callback} callback 
     */
    save(task, callback){
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
                var request = objectStore.put(customer);
                request.onsuccess = function(event) {
                    callback(request.result)
                };
            });
        });
        
    }

    /**
     * Get all datas in the database
     * 
     * @param {Function calback} callback 
     */
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
        this.db.con((db) =>{
            var request = db.transaction(["tasks"], "read");
        });
    }

    getById(id, callback){
        this.db.con((db) => {
            var objectStore = db.transaction(["tasks"]).objectStore("tasks");
            var request = objectStore.get(id);
            request.onerror = function(event){

            };

            request.onsuccess = function(event){
                callback(event.result);
            }
        })
    }

    /**
     * delete data of database
     * 
     * @param {Integer} id 
     */
    delete(id){
        this.db.con((db) => {
            var request = db.transaction(["tasks"], "readwrite")
                .objectStore("tasks")
                .delete(id);
            request.onsuccess = function(event) {
                console.log("Excluido com sucesso")
            };
        });
    }
}