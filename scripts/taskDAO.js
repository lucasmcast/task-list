class TaskDAO{
    constructor(){
        this.lastId;
    }

    save(task){

        let id = 0;
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
                id = event.target.result
                return id;
                console.log(id)
            };
        });
    }


    getAll (){
        let allTasks = []
        var objectStore = db.transaction(["tasks"]).objectStore("tasks");
        objectStore.openCursor().onsuccess = function(event) {
            var cursor = event.target.result;
            console.log(cursor);
            if (cursor){
                //console.log(cursor.key + " " + cursor.value.descricao);
                let task = new Task()
                task.setId(cursor.key);
                task.setDescricao(cursor.value.descricao);
                task.setSituacao(cursor.value.situacao);

                allTasks.push(task)
                cursor.continue();
            }else{
                console.log("no more entries")
            }
        };

        return allTasks;   
    }

    edit(task){

    }

    getAllEmptyCursor(){
        var objectStore = db.transaction(["tasks"]).objectStore("tasks");
        objectStore.getAll().onsuccess = function(event) {
            console.log("Got all custemer:: " + event.target.result);
        }
    }

    delete(task){

    }
}