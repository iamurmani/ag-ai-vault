import { NgModule } from "@angular/core";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
    declarations:[AdminSignInComponent],
    exports:[AdminSignInComponent],
    imports:[AdminRoutingModule]
})
export class AdminModule {

} 