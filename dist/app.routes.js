"use strict";
var router_1 = require('@angular/router');
var edit_component_1 = require('./list/edit.component');
var create_component_1 = require('./list/create.component');
var list_component_1 = require('./list/list.component');
exports.appRoutes = [
    { path: 'edit', component: edit_component_1.EditListComponent },
    { path: 'create', component: create_component_1.CreateListComponent },
    { path: '', component: list_component_1.ListComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routes.js.map