import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminSignUpComponent } from "./components/admin-sign-up/admin-sign-up.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {  canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ToolsDataComponent } from "./components/dashboard/tools-data/tools-data.component";
import { AdminOverviewComponent } from "./components/dashboard/admin-overview/admin-overview.component";
import { UsersDataComponent } from "./components/dashboard/users-data/users-data.component";
import { CategoryDataComponent } from "./components/dashboard/category-data/category-data.component";


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['admin/signin']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['admin/dashboard']);
const routes: Routes = [
    {path:'', component:AdminSignInComponent},
    {path:'signin', component:AdminSignInComponent, ...canActivate(redirectLoggedInToItems)},
    {path:'signup',component:AdminSignUpComponent},
    {path:'dashboard', component:DashboardComponent,  ...canActivate(redirectUnauthorizedToLogin),
    children:[
      {path:'', component:AdminOverviewComponent},
      {path:'tools', component:ToolsDataComponent},
      {path:'users', component:UsersDataComponent},
      {path:'categories', component:CategoryDataComponent}
    ]
}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule {

}