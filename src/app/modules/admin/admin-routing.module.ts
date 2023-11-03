import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminSignUpComponent } from "./components/admin-sign-up/admin-sign-up.component";
const routes: Routes = [
    {path:'', component:AdminSignInComponent},
    {path:'signin', component:AdminSignInComponent},
    {path:'signup',component:AdminSignUpComponent}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule {

}