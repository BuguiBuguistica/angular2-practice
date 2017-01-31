import { Component } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {LIST} from '../mocks/list_mock';
import {List} from '../models/list';
import {Categories} from '../models/categories';
import {CATEGORIES} from '../mocks/categories_mock';
import { ListCategoryPipe } from '../shared/pipes';
import { ListImageCategoryPipe } from '../shared/pipes';

@Component({
    selector:'list',
    templateUrl:'./app/list/list.template.html',
    styleUrls:['./app/list/list.css'],
    directives:[MD_CARD_DIRECTIVES ],
    pipes: [ListCategoryPipe, ListImageCategoryPipe]
})
export class ListComponent{
    list: List[];
    categories:Categories[]; 

    ngOnInit(){
        this.list = LIST;
        this.categories = CATEGORIES;
    }
}