import { NgModule } from "@angular/core";
import { AdminSignInComponent } from "./components/admin-sign-in/admin-sign-in.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/materila.module";
import { SharedModule } from "../shared/shared.module";
import { AdminSignUpComponent } from "./components/admin-sign-up/admin-sign-up.component";

@NgModule({
    declarations:[
        AdminSignInComponent,
        AdminSignUpComponent
    ],
    exports:[
        AdminSignInComponent,
        AdminSignUpComponent
    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        MaterialModule,
        SharedModule
    ]
})
export class AdminModule {

} 