//window.indexedDB =  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

/**
 * Class of Data Base
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 */
export default class DataBase{

    constructor(){
        this.con((db) => {});
    }
    /**
     * Make connetion with database
     * 
     * @param {Function Callback} callback 
     */
    con(callback){
        this.db = null;
        this.request  = indexedDB.open("DBtask", 1);
        this.request.onerror = function(e) {
            console.log("Error " + e.target.errorCode);
        };

        this.request.onupgradeneeded = function(e){
            this.db = e.target.result;
        
            const tasks = this.db.createObjectStore("tasks",  { keyPath: "id", autoIncrement:true });
            tasks.createIndex("id", "id",)
            tasks.createIndex("descricao", "descricao", { unique: false });
            tasks.createIndex("situacao", "situacao", {unique: false});
        
        };

        this.request.onsuccess = function(e){
            this.db = e.target.result;
            callback(this.db)
        };
    }
}
