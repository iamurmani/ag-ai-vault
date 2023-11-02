import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
const routes: Routes = [
    {path:'', component:AdminSignInComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule {

}