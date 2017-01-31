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
var categories_mock_1 = require('../mocks/categories_mock');
var _ = require('underscore');
var ListCategoryPipe = (function () {
    function ListCategoryPipe() {
    }
    ListCategoryPipe.prototype.transform = function (value, id) {
        var categories = categories_mock_1.CATEGORIES;
        var category = _.findWhere(categories_mock_1.CATEGORIES, { id: value });
        return category.name;
    };
    ListCategoryPipe = __decorate([
        core_1.Pipe({ name: 'listCategory' }), 
        __metadata('design:paramtypes', [])
    ], ListCategoryPipe);
    return ListCategoryPipe;
}());
exports.ListCategoryPipe = ListCategoryPipe;
var ListImageCategoryPipe = (function () {
    function ListImageCategoryPipe() {
    }
    ListImageCategoryPipe.prototype.transform = function (value) {
        var categories = categories_mock_1.CATEGORIES;
        var category = _.findWhere(categories_mock_1.CATEGORIES, { id: value });
        return category.image;
    };
    ListImageCategoryPipe = __decorate([
        core_1.Pipe({ name: 'listImageCategory' }), 
        __metadata('design:paramtypes', [])
    ], ListImageCategoryPipe);
    return ListImageCategoryPipe;
}());
exports.ListImageCategoryPipe = ListImageCategoryPipe;
//# sourceMappingURL=pipes.js.map