import { Routes } from '@angular/router';
import { HomePage } from '../Components/home-page/home-page';
import { Users } from '../Components/users/users';




export const routes: Routes = [
    {path:'', component: HomePage},
    {path:'users', component:Users}


];
