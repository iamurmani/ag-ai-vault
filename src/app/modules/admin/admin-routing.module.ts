import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminSignUpComponent } from "./components/admin-sign-up/admin-sign-up.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import {  canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ToolsTableComponent } from "./components/dashboard/tools-table/tools-table.component";


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['admin/signin']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['admin/dashboard']);
const routes: Routes = [
    {path:'', component:AdminSignInComponent},
    {path:'signin', component:AdminSignInComponent, ...canActivate(redirectLoggedInToItems)},
    {path:'signup',component:AdminSignUpComponent},
    {path:'dashboard', component:DashboardComponent,  ...canActivate(redirectUnauthorizedToLogin),
}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule {

}