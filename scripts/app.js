import TableView from './tableView.js'

const view = new TableView();
view.singleton();

window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator){
        navigator.serviceWorker
            .register('./sw.js');
    }
}