import { Pipe, PipeTransform } from '@angular/core';
import {Categories} from '../models/categories';
import {CATEGORIES} from '../mocks/categories_mock';
import * as _ from 'underscore';

@Pipe({name: 'listCategory'})
export class ListCategoryPipe implements PipeTransform {
  transform(value: number, id:number): string {
    let categories = CATEGORIES;
    let category = _.findWhere(CATEGORIES, {id: value});
    return category.name;
  }
}

@Pipe({name:'listImageCategory'})
export class ListImageCategoryPipe implements PipeTransform {
    transform(value:number):string {
        let categories = CATEGORIES;
        let category = _.findWhere(CATEGORIES, {id: value});
        return category.image;
    }
}