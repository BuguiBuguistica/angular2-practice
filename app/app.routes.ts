import { Routes, RouterModule }   from '@angular/router';
import {EditListComponent} from './list/edit.component';
import {CreateListComponent} from './list/create.component';
import {ListComponent} from './list/list.component';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [  
  { path: 'edit', component:EditListComponent  },
  { path: 'create', component:CreateListComponent  },
  { path: '', component:ListComponent  }
];

export const routing = RouterModule.forRoot(appRoutes);