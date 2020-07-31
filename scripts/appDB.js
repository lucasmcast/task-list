//window.indexedDB =  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

export default class DataBase{

    constructor(){
        this.con((db) => {});
    }
    con(callback){
        this.db = null;
        this.request  = indexedDB.open("DBtask", 1);
        this.request.onerror = function(e) {
            console.log("Error " + e.target.errorCode);
        };

        this.request.onupgradeneeded = function(e){
            this.db = e.target.result;
        
            const tasks = this.db.createObjectStore("tasks", {autoIncrement: "id"});
            tasks.createIndex("descricao", "descricao", { unique: false });
            tasks.createIndex("situacao", "situacao", {unique: false});
        
        };

        this.request.onsuccess = function(e){
            this.db = e.target.result;
            callback(this.db)
        };
    }
}
