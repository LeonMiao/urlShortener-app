// export class AppRoute {
// }


import { Routes, RouterModule } from '@angular/router';
//import { WelcomeComponent } from './welcome/welcome.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
//import { List2Component } from './newList/list2.component';

const routes: Routes = [
    // { path: '', component: ListsComponent },
    { path: 'list', component: ListsComponent },
    { path: 'list/:id', component: ListComponent}
];

export const routing = RouterModule.forRoot(routes);