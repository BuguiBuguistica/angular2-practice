"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CreateListComponent = (function () {
    function CreateListComponent() {
        this.list = {
            name: '',
            category: '',
            note: ''
        };
        this.categories = [
            "supermercado", "ropa", "libreria", "bazar", "verduleria"
        ];
        this.selectedUser = { id: 1, name: 'Bob' };
        this.showColors = false;
        this.displayColors = displayColors;
    }
    CreateListComponent = __decorate([
        core_1.Component({
            selector: 'create-list',
            templateUrl: './app/list/create.template.html',
            styleUrls: ['./app/list/list.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CreateListComponent);
    return CreateListComponent;
}());
exports.CreateListComponent = CreateListComponent;
function displayColors() {
    console.log('display');
    this.showColors = !this.showColors;
}
//# sourceMappingURL=create.component.js.map