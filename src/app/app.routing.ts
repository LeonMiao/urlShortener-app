// export class AppRoute {
// }


import { Routes, RouterModule } from '@angular/router';
import { ConvertComponent } from './convert/convert.component';
import { ListsComponent } from './lists/lists.component';
import { ListComponent } from './list/list.component';
import { ConvertedComponent } from './converted/converted.component';
import { LoginComponent} from './login/login.component';
//import { List2Component } from './newList/list2.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'list', component: ListsComponent },
    { path: 'list/:id', component: ListComponent},
    { path: 'url', component: ConvertComponent},
    { path: 'url/:shortUrl', component: ConvertedComponent}//,
    //{ path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);