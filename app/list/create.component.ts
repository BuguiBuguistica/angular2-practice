import { Component } from '@angular/core';

@Component({
    selector:'create-list',
    templateUrl:'./app/list/create.template.html',
    styleUrls:['./app/list/list.css']
})
export class CreateListComponent { 
    list = {
        name: '',
        category:'',
        note:''
    };

   categories = [
       "supermercado", "ropa", "libreria", "bazar", "verduleria"
   ];
 selectedUser = { id: 1, name: 'Bob' };

 showColors = false;
 displayColors = displayColors;

 function displayColors() {
     console.log('display');
     this.showColors = !this.showColors;
 }
}